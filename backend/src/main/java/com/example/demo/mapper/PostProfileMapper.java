package com.example.demo.mapper;

import com.example.demo.model.PostProfile;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Delete;

import java.util.List;

@Mapper
public interface PostProfileMapper {
    @Select("SELECT * FROM PostProfile WHERE id=#{id}")
    PostProfile getPostProfile(@Param("id")String id);

    @Select("SELECT * FROM PostProfile")
    List<PostProfile>getPostProfileList();

    @Insert("INSERT INTO PostProfile VALUES(#{id},#{title},#{content},#{writer})")
    int insertPostProfile(@Param("id") String id,@Param("title") String title,@Param("content") String content,@Param("writer") String writer );

    @Update("UPDATE PostProfile SET title=#{title},content=#{content},writer=#{writer}WHERE id=#{id}")
    int updatePostProfile(@Param("id") String id,@Param("title") String title,@Param("content") String content,@Param("writer") String writer );

    @Delete("DELETE FROM PostProfile WHERE id=#{id}")
    int deletePostProfile(@Param("id")String id);
}
