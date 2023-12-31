import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import { Empty } from "@/components/ui/Empty";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import getCurrentUser from "@/app/actions/getCurrentUser";
interface Iparams {
  conversationId: string;
}
const page = async ({ params }: { params: Iparams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);
  if (!conversation) {
    return (
      <div
        className="lg:pl-80 h-full lg:block"
      >
        <div className="h-full flex flex-col">
          <Empty label="No conversation found select a chat or start conversastion" />
        </div>
      </div>
    );
  }
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default page;
