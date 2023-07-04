package com.example.demo.controller;

import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.*;

import com.example.demo.mapper.PostProfileMapper;
import com.example.demo.model.PostProfile;

import java.util.List;

@RestController
public class PostController {
    private PostProfileMapper mapper;

    public PostController(PostProfileMapper mapper){
        this.mapper = mapper;
    }

    @GetMapping("/post/{id}")
    public PostProfile getPostProfile(@PathVariable("id")String id){
        return mapper.getPostProfile(id);
    }

    @GetMapping("/post")
    public List<PostProfile> getPostProfilelist(){
        return mapper.getPostProfileList();
    }

//    @PostMapping("/post")
//    public void postPostProfile(@PathParam("id") String id, @RequestParam("title") String title, @RequestParam("content") String content, @RequestParam("writer") String writer) {
//        mapper.insertPostProfile(id, title, content, writer);
//    }
//
//    @PutMapping("/post/{id}")
//    public void putPostProfile(@PathVariable("id") String id, @RequestParam("title") String title,@RequestParam("content") String content,@RequestParam("writer") String writer) {
//        mapper.updatePostProfile(id, title, content, writer);
//    }
    @PostMapping("/post")
    public void postPostProfile(@RequestBody PostProfile postProfile) {
        mapper.insertPostProfile(postProfile.getId(), postProfile.getTitle(), postProfile.getContent(), postProfile.getWriter());
    }

    @PutMapping("/post/{id}")
    public void putPostProfile(@PathVariable("id") String id, @RequestBody PostProfile postProfile) {
        mapper.updatePostProfile(id, postProfile.getTitle(), postProfile.getContent(), postProfile.getWriter());
    }

    @DeleteMapping("post/{id}")
    public void deletePostProfile(@PathVariable("id")String id){
        mapper.deletePostProfile(id);
    }
}
