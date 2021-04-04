import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChatEngine } from "react-chat-engine";

export default function Dashboard() {
  const username = localStorage.getItem('username');

  var data1 = {username: username};
      var config1 = {
        method: 'post',
        url: 'https://api.chatengine.io/chats/13362/people/',
        headers: { 
          'Project-ID': '589e180c-73a9-42e1-8c9e-61676d54116d', 
          'User-Name': 'rami', 
          'User-Secret': '123'
        },
        data : data1
      };
  useEffect(() => {
    async function addNew() {
        axios(config1)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    })
      
    }
    addNew()
  },[])
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID="589e180c-73a9-42e1-8c9e-61676d54116d"
    />
  );
}
