package tr.com.astair.astair.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "weatherpoll")
public class Slack {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "user_id")
    private Long user_id;

    @Column(name = "vote")
    private String vote;

    @Column(name = "vote_id")
    private Integer vote_id;

//    @Column(name="poll_creator")
//    private String poll_creator;

    @Column(name = "date_time")
    private Timestamp date_time;

    public Slack() {
    }

    public Slack(Long user_id) {
        this.user_id = user_id;
    }

    public Slack(Long user_id, String vote, Integer vote_id, String poll_creator) {
        this.user_id = user_id;
        this.vote = vote;
        this.vote_id = vote_id;
        /*  this.poll_creator = poll_creator;*/
    }

    public Integer getVote_id() {
        return vote_id;
    }

    public void setVote_id(Integer vote_id) {
        this.vote_id = vote_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getVote() {
        return vote;
    }

    public void setVote(String vote) {
        this.vote = vote;
    }

  /*  public String getPoll_creator() {
        return poll_creator;
    }

    public void setPoll_creator(String poll_creator) {
        this.poll_creator = poll_creator;
    }*/

    public Timestamp getDate_time() {
        return date_time;
    }

    public void setDate_time(Timestamp date_time) {
        this.date_time = date_time;
    }
}