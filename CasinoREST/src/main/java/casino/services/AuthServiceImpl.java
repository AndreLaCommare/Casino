package casino.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import casino.entities.User;
import casino.repositories.UserRepository;

public class AuthServiceImpl implements AuthService {

	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder encoder;
	@Override
	public User register(User user) {
		// TODO Auto-generated method stub
//		String encrypted = encoder.encode(user.getPassword());
//		user.setPassword(encrypted);
//		user.setEnabled(true);
//		user.setRole("standard");
		return userRepo.saveAndFlush(user);
	}

	@Override
	public User getUserByUsername(String username) {
		// TODO Auto-generated method stub
		return userRepo.findByUsername(username);
	}
	
}
