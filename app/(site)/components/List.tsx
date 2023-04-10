'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Input from "../../components/Input";
import ChatBox from "../../components/ChatBox";
import useChat from "@/app/hooks/useChat";
import { classNames } from "@/app/helpers";

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Hey, just checking if...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Hey, just checking if...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Hey, just checking if...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const List = () => {
  const { isOpen } = useChat();

  return ( 
    <aside className={classNames(`
      fixed 
      inset-y-0 
      pb-20
      lg:pb-0
      lg:left-20 
      lg:w-80 
      lg:block
      overflow-y-auto 
      border-r 
      border-gray-200 
    `, isOpen ? 'hidden' : 'block w-full left-0')}>
      <div className="px-5">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 pt-4">
            Messages
          </div>
          <div className="my-2">
            <Input icon={MagnifyingGlassIcon} placeholder="Search" />
          </div>
        </div>
        {people.map((person) => (
          <ChatBox
            imageUrl={person.imageUrl}
            name={person.name}
            key={person.email}
            message={person.role}
          />
        ))}
      </div>
    </aside>
   );
}
 
export default List;