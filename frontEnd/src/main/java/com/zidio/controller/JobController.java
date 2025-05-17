package com.zidio.controller;

import com.zidio.model.Job;
import com.zidio.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class JobController {

    @Autowired
    private JobRepository jobRepo;

    @GetMapping
    public List<Job> getAllJobs() {
        return jobRepo.findAll();
    }

    @PostMapping
    public ResponseEntity<String> postJob(@RequestBody Job job) {
        jobRepo.save(job);
        return ResponseEntity.ok("Job posted successfully");
    }
}
