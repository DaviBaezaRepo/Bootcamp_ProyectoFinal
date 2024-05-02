package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Event;
import com.example.repository.EventRepository;

@Service
public class EventService {
	@Autowired
	EventRepository eventRepository;
	
	public List<Event> findAllEvents() {
		return eventRepository.findAll()	;
	}
	 public Optional<Event> getById(Long id) {
	        return eventRepository.findById(id);
	    }
	 
	 public Event saveEvent(Event event) {
	    	return eventRepository.save(event);
	    }
	 
	 public Event updateById(Event request, Long id) {
	    	Event event = eventRepository.findById(id).get();
	    	event.setTitle(request.getTitle());
	    	event.setDescription(request.getDescription());
	    	event.setImage(request.getImage());
	    	event.setLocation(request.getLocation());
	    	event.setDuration(request.getDuration());
	    	event.setDateandtime(request.getDateandtime());
	    	event.setCategories(request.getCategories());
	    	return event;
	    }
	  
	    public Boolean deleteEvent(Long id) {
	    	try {
	    		eventRepository.deleteById(id);
	    		return true;
	    	} catch (Exception e) {
	    		return false;
	    	}
	    }
}