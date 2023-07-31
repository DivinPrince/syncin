import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/app/actions/getConversations";

export const metadata = {
  title: "Syncin | Messages",
  description: "let's sync",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className="relative bg-neutral-900 rounded-[5px] h-full overflow-hidden overflow-y-auto">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
