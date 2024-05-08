package com.example.entities.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.EventDTO;
import com.example.entities.EventEntity;
import com.example.repository.EventDtoRepository;
import com.example.service.EventService;

@RestController
@RequestMapping("/events")
@CrossOrigin("*") 

public class EventController {

	@Autowired
	private EventService eventService;
	
	@Autowired
	private EventDtoRepository eventDtoRepository;

	@GetMapping
	public List<EventEntity> getEvents() {
		return eventService.findAllEvents();
	}
	
	@GetMapping("/dto")
	public List<EventDTO> getEventsDTO() {
		return eventDtoRepository.findAll();
	}

	@GetMapping(path = "/{id}")
	public Optional<EventEntity> getEventById(@PathVariable Long id) {
		return eventService.getById(id);
	}

	@PostMapping
	public EventEntity saveEvent(@RequestBody EventEntity event) {
		return this.eventService.saveEvent(event);
	}

	@PutMapping("/{id}")
	public EventEntity updateEventById(@RequestBody EventEntity request, Long id) {
		return this.eventService.updateById(request, id);
	}

	@DeleteMapping("/{id}")
	public String deleteEventById(@PathVariable Long id) {
		return this.eventService.deleteEvent(id) ? "Event with id " + id + " deleted."
				: "Event with id " + id + " not deleted.";
	}

}