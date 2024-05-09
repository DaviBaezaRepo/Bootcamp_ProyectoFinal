package com.example.service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.entities.EventEntity;
import com.example.repository.EventRepository;

@Service
public class EventService {
	@Autowired
	EventRepository eventRepository;
	@Autowired
	RestTemplate restTemplate;

	public List<EventEntity> findAllEvents() {
		return eventRepository.findAll();
	}

	public List<EventEntity> getEvents() {
		ResponseEntity<EventEntity[]> response = restTemplate.getForEntity("http://services-events/api/events/",
				EventEntity[].class);

		if (response.getStatusCode() == HttpStatus.OK) {
			return Arrays.asList(response.getBody());
		} else {
			// Handle error cases here
			return Collections.emptyList(); // or throw an exception
		}
	}

	public Optional<EventEntity> getById(Long id) {
		return eventRepository.findById(id);
	}

	public EventEntity saveEvent(EventEntity event) {
		return eventRepository.save(event);
	}

	public EventEntity updateById(EventEntity request, Long id) {
		EventEntity event = eventRepository.findById(id).get();
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