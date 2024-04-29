package com.example.entities.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Event;
import com.example.service.EventService;

import lombok.extern.java.Log;

@Log
@RestController
@RequestMapping(value = "/1.0.0")
public class EventController {
	
	@Autowired
	EventService eventService;
	
	@RequestMapping("/events")
	public List<Event> getEvents() {
		log.info("bla bla bla");
		return eventService.findAllEvents();
	}
	
}