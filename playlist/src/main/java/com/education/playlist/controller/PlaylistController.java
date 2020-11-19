package com.education.playlist.controller;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PlaylistController {

	@GetMapping("/")
	public String listPlaylistAndSongs() {

		return "index";
	}


}