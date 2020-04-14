package com.marriagewebsite.controller;

import javax.xml.ws.Response;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
public class MainController {

	
	@PostMapping("/login")
	public Response login() {
		return null;
	}
	
	@RequestMapping(value= "/test", method = RequestMethod.GET)
	public void test() {
		System.out.println("Hi there");
	}
}

