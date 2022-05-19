package com.example.demo;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class NumberGenerator extends Thread {

    static List<WebSocketSession> sessions;

    public NumberGenerator (List<WebSocketSession> sessions){
        this.sessions = sessions;
        this.start();
    }

    @Override
    public void run() {
        try{
            while(true) {
                Thread.sleep(1000);
                double d = Math.random();
                System.out.println(d);
                synchronized (sessions){
                    for (WebSocketSession webSocketSession : sessions) {
                        webSocketSession.sendMessage(new TextMessage(String.valueOf(d)));
                    }
                }
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }

    }


}
