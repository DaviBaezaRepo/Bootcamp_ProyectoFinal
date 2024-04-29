package com.example.entities.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Event;
import com.example.service.EventService;

@RestController
@RequestMapping()
public class EventController {
	
	@Autowired
	EventService eventService;
	
	@GetMapping("/events")
	public List<Event> getEvents() {
		return eventService.findAllEvents();
	}
	
}