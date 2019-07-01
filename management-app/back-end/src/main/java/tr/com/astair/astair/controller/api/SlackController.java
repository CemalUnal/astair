package tr.com.astair.astair.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import tr.com.astair.astair.controller.SlackControllerApi;
import tr.com.astair.astair.model.Slack;
import tr.com.astair.astair.service.SlackService;

import java.util.List;

@RestController
public class SlackController implements SlackControllerApi {

    private SlackService slackService;

    @Autowired
    public SlackController(SlackService slackService) {
        this.slackService = slackService;
    }

    public ResponseEntity<List<Slack>> getPollResult(@PathVariable Integer id) {
        List<Slack> test = slackService.getPollResult(id);
        if (test == null) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(test, HttpStatus.OK);
    }

    public ResponseEntity<List<Slack>> getAll() {
        List<Slack> test = slackService.get();
        if (test == null) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(test, HttpStatus.OK);
    }

}
