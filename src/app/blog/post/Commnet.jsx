import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Comment = ({ author, date, content, avatar, id }) => (
    <div className={`flex flex-wrap sm:flex-nowrap gap-5 sm:space-x-4 mb-8 ${id === 2 ? 'ml-8 sm:ml-28' : ''}`}>
        <img src={avatar} alt={author} className="w-[100px] h-[100px] rounded-full object-cover" />
        <div className="sm:flex-1">
            <div className="mb-2">
                <span className="text-gray-500 text-sm">{date}</span>
                <h3 className="font-bold text-lg mr-4">{author}</h3>
            </div>
            <div className='flex flex-wrap sm:flex-nowrap gap-2 sm:gap-x-28 items-center justify-between'>
                <p className="text-gray-700">{content}</p>
                <button className="text-black font-medium mt-2 hover:text-orange-600 flex items-center text-sm"><GoDotFill className="text-[#f8a065]" />REPLY</button>
            </div>
        </div>
    </div>
);

const CommentSection = () => {
    const comments = [
        {
            id: 1,
            author: "Ayden Turner",
            date: "March 10, 2023",
            content: "Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Vul putate mi sit amet.",
            avatar: "https://i.pravatar.cc/150?img=32"
        },
        {
            id: 2,
            author: "Devon Riggs",
            date: "March 10, 2023",
            content: "Massa eget egestas purus viverra acc umsan. Massa eget.",
            avatar: "https://i.pravatar.cc/150?img=11"
        },
        {
            id: 3,
            author: "Sion Reid",
            date: "March 10, 2023",
            content: "Ultrices mi tempus imperdiet nulla. Nisl suscipit adi pisci eden bibendum.",
            avatar: "https://i.pravatar.cc/150?img=59"
        }
    ];

    return (
        <div className="py-6">
            <h2 className="text-4xl font-bold mb-8">3 Comments</h2>
            {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
            ))}
        </div>
    );
};

export default CommentSection;