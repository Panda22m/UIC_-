import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from 'lucide-react';

export const CommunityScreen: React.FC = () => {
  const posts = [
    {
      id: 1,
      user: '김그린',
      level: 'Lv.8 숲',
      time: '오늘 오전 11:24',
      content: '오늘도 자전거 출퇴근 성공! 3.7km 거리를 자전거로 이동해서 CO₂ 0.9kg 절감했어요 🌱',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600&auto=format&fit=crop',
      tag: '자전거 출퇴근',
      likes: 32,
      commentCount: 5,
      comments: [
        { user: '황그린', content: '저도 이번주에 자전거 출퇴근 도전해봐야겠네요!' },
        { user: '박그린', content: '같은 구간 자가용이면 얼마나 나오는지 궁금해요!' }
      ]
    },
    {
        id: 2,
        user: '이환경',
        level: 'Lv.10 지구지킴이',
        time: '어제 오후 6:30',
        content: '이번 달 대중교통 이용 챌린지 달성했습니다! 🚌 지하철로 다니니 책 읽을 시간도 생기고 좋네요.',
        tag: '대중교통 챌린지',
        likes: 56,
        commentCount: 12,
        comments: [
            { user: '최지구', content: '축하드려요! 저도 분발해야겠네요 ㅎㅎ' }
        ]
    },
    {
        id: 3,
        user: '정에너지',
        level: 'Lv.4 새싹',
        time: '2일 전',
        content: '텀블러 사용 10회차 인증합니다. 일회용컵 줄이기 함께해요! ☕️',
        image: 'https://images.unsplash.com/photo-1578357078586-491f655c200c?q=80&w=600&auto=format&fit=crop',
        tag: '제로웨이스트',
        likes: 24,
        commentCount: 3,
        comments: []
    }
  ];

  return (
    <div className="pb-20 min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-white p-4 sticky top-0 z-10 border-b border-slate-200 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold text-xl flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                GreenPass
            </span>
        </div>
        <div className="flex gap-4 text-slate-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
             <div className="bg-emerald-500 rounded-full p-0.5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
             </div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        {posts.map(post => (
          <div key={post.id} className="bg-white mb-2 p-5 border-b border-slate-100 last:mb-0">
            {/* User Info */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                   <span className="text-emerald-700 font-bold">{post.user[0]}</span>
                   <div className="absolute w-3 h-3 bg-green-500 rounded-full border-2 border-white translate-x-3 translate-y-3"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{post.user}</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-medium">{post.level}</span>
                  </div>
                  <span className="text-xs text-slate-400">{post.time}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mb-3">
                <p className="text-slate-800 text-sm font-medium leading-relaxed mb-3">
                {post.content}
                </p>
                {post.image && (
                <div className="relative rounded-xl overflow-hidden mb-3 border border-slate-100">
                    <img src={post.image} alt="Post" className="w-full object-cover" />
                    {post.tag && (
                         <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                            {post.tag}
                         </div>
                    )}
                </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-50 mb-4">
               <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-500 transition-colors">
                     <Heart size={20} />
                     <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-500 transition-colors">
                     <MessageCircle size={20} />
                     <span className="text-sm">{post.commentCount}</span>
                  </button>
               </div>
               <button className="text-slate-400">
                  <Bookmark size={20} />
               </button>
            </div>

            {/* Comments Section */}
            {post.comments.length > 0 && (
                <div className="bg-slate-50 rounded-xl p-3 space-y-3">
                    {post.comments.map((comment, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start text-sm">
                            <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                {comment.user[0]}
                            </div>
                            <div className="flex-1">
                                <p>
                                    <span className="font-bold text-slate-700 mr-2">{comment.user}</span>
                                    <span className="text-slate-600">{comment.content}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};