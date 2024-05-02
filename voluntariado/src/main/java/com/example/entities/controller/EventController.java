package com.example.entities.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Event;
import com.example.service.EventService;

@RestController
@RequestMapping()
public class EventController {
	
	@Autowired
	private EventService eventService;
	
	@GetMapping("/events")
	public List<Event> getEvents() {
		return eventService.findAllEvents();
	}
	
	@GetMapping(path = "/events/{id}")
    public Optional<Event> getEventById(@PathVariable Long id) {
        return eventService.getById(id);
    }
	
	@PostMapping("/events")
	public Event saveEvent(@RequestBody Event event) {
		return this.eventService.saveEvent(event);
	}
	
	@PutMapping("/events/{id}")
	public Event updateEventById(@RequestBody Event request, Long id) {
		return this.eventService.updateById(request, id);
	}
	
	@DeleteMapping("/events/{id}")
	public String deleteEventById(@PathVariable Long id) {
		boolean ok = this.eventService.deleteEvent(id);
		if(ok) {
			return "Event with id "+id+" deleted.";
		}else {
			return "Event with id "+id+" not deleted.";
		}
	}
	
}