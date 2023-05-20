package casino.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import casino.services.AuthService;

@RestController
@CrossOrigin({"*", "http://localhost/"})
public class AuthController {
	private AuthService authService;
}
