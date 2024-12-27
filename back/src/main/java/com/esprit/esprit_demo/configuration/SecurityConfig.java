package com.esprit.esprit_demo.configuration;

import com.esprit.esprit_demo.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
public class SecurityConfig {

    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public SecurityConfig(CustomUserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        // Set authentication manager with custom userDetailsService
        AuthenticationManagerBuilder authBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
        AuthenticationManager authenticationManager = authBuilder.build();
        http.authenticationManager(authenticationManager);

//        http
//                .csrf(csrf -> csrf.disable()) // In production, consider enabling CSRF and using tokens
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/", "/home", "/public/**").permitAll()
//                        .requestMatchers("/appointments/**").permitAll()
//                        .requestMatchers("/student/**").hasRole("STUDENT")
//                        .requestMatchers("/teacher/**").hasRole("TEACHER")
//                        .requestMatchers("/physician/**").hasRole("PHYSICIAN")
//                        .requestMatchers("/nurse/**").hasRole("NURSE")
//                        .anyRequest().authenticated()
//                )
//                .formLogin(form -> form
//                        .loginPage("/login").permitAll()
//                        .defaultSuccessUrl("/home", true)
//                )
//                .logout(logout -> logout
//                        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                        .logoutSuccessUrl("/login?logout")
//                        .permitAll()
//                );
        http.csrf(AbstractHttpConfigurer::disable).authorizeHttpRequests(auth -> auth.requestMatchers("**").permitAll());

        return http.build();
    }
}