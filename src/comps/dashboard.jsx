import React from "react";
import { ChatEngine } from "react-chat-engine";

export default function Dashboard() {
  return (
    <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='589e180c-73a9-42e1-8c9e-61676d54116d'
		/>
  );
}
