package com.example.demo.model;

public class PostProfile {
    private static int nextId = 1;
    private String id;
    private String title;
    private String content;
    private String writer;

    //public PostProfile(String id,String title, String content, String writer ){
    public PostProfile(String title, String content, String writer ){
        //super();
        //this.id = id;
        this.id = String.valueOf(nextId++);
        this.title = title;
        this.content = content;
        this.writer = writer;
    }

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getContent(){
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }

    public String getWriter(){
        return writer;
    }

    public void setWriter(String writer){
        this.writer = writer;
    }
}
