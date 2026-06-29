import{j as e}from"./react-core-ace18a71.js";import{T as l,A as a,B as s}from"./flowbite-8fa2690f.js";import{o,p as c,q as n,r as x,s as d,t as g,u as p,v as h,w as y,x as f,y as u,z as m,A as b}from"./icons-2ef3f229.js";import{B as i}from"./block-section-a4c378cc.js";import"./vendor-b7139610.js";const z=function(){return e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(N,{}),e.jsx(j,{}),e.jsx(w,{})]})},v=function(){return e.jsx(i,{title:"Chat Interface",description:"Full-featured chat application layout with contact sidebar, chat header, message threads, and an input area.",code:`
<div className="grid grid-cols-1 md:grid-cols-3 h-[600px] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
  <div className="md:col-span-1 border-r border-gray-200 dark:border-gray-700 flex flex-col">
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <TextInput placeholder="Search messages..." />
    </div>
    <div className="flex-1 overflow-y-auto">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i} className={\`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer \${i === 1 ? 'bg-blue-50 dark:bg-gray-800' : ''}\`}>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar rounded img={\`https://flowbite.com/docs/images/people/profile-picture-\${i}.jpg\`} status={i % 2 === 0 ? "online" : "offline"} statusPosition="bottom-right" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">User {i}</p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">Hey, how are you doing?</p>
              </div>
              <div className="inline-flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400">2m</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="md:col-span-2 flex flex-col bg-gray-50 dark:bg-gray-800">
    <div className="p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online" />
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">User 1</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">Active now</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button color="gray" size="sm" pill><HiPhone className="h-5 w-5" /></Button>
        <Button color="gray" size="sm" pill><HiVideoCamera className="h-5 w-5" /></Button>
        <Button color="gray" size="sm" pill><HiDotsVertical className="h-5 w-5" /></Button>
      </div>
    </div>
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <div className="flex justify-end">
        <div className="bg-primary-600 text-white p-3 rounded-lg rounded-br-none max-w-md shadow-sm">
          <p>Hey! checked the new design updates?</p>
        </div>
      </div>
      <div className="flex justify-start">
        <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" size="xs" className="mr-2 mt-1" />
        <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-lg rounded-bl-none max-w-md shadow-sm border border-gray-200 dark:border-gray-600">
          <p>Yes, I just looked at them. They look amazing! 🎨</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-primary-600 text-white p-3 rounded-lg rounded-br-none max-w-md shadow-sm">
          <p>Great! Let's deploy them.</p>
        </div>
      </div>
    </div>
    <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <Button color="gray" pill size="sm" className="hidden sm:inline-flex"><HiEmojiHappy className="h-6 w-6 text-gray-500" /></Button>
        <Button color="gray" pill size="sm" className="hidden sm:inline-flex"><HiPhotograph className="h-6 w-6 text-gray-500" /></Button>
        <div className="flex-1"><TextInput placeholder="Write a message..." /></div>
        <Button color="primary" pill><HiPaperAirplane className="h-5 w-5 rotate-90" /></Button>
      </div>
    </div>
  </div>
</div>
            `,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 h-[600px] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900",children:[e.jsxs("div",{className:"md:col-span-1 border-r border-gray-200 dark:border-gray-700 flex flex-col",children:[e.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:e.jsx(l,{placeholder:"Search messages..."})}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsx("ul",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[1,2,3,4,5].map(r=>e.jsx("li",{className:`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${r===1?"bg-blue-50 dark:bg-gray-800":""}`,children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"relative",children:e.jsx(a,{rounded:!0,img:`https://flowbite.com/docs/images/people/profile-picture-${r}.jpg`,status:r%2===0?"online":"offline",statusPosition:"bottom-right"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:["User ",r]}),e.jsx("p",{className:"text-sm text-gray-500 truncate dark:text-gray-400",children:"Hey, how are you doing?"})]}),e.jsx("div",{className:"inline-flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400",children:"2m"})]})},r))})})]}),e.jsxs("div",{className:"md:col-span-2 flex flex-col bg-gray-50 dark:bg-gray-800",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(a,{rounded:!0,img:"https://flowbite.com/docs/images/people/profile-picture-1.jpg",status:"online"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"User 1"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Active now"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(s,{color:"gray",size:"sm",pill:!0,children:e.jsx(o,{className:"h-5 w-5"})}),e.jsx(s,{color:"gray",size:"sm",pill:!0,children:e.jsx(c,{className:"h-5 w-5"})}),e.jsx(s,{color:"gray",size:"sm",pill:!0,children:e.jsx(n,{className:"h-5 w-5"})})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-primary-600 text-white p-3 rounded-lg rounded-br-none max-w-md shadow-sm",children:e.jsx("p",{children:"Hey! checked the new design updates?"})})}),e.jsxs("div",{className:"flex justify-start",children:[e.jsx(a,{rounded:!0,img:"https://flowbite.com/docs/images/people/profile-picture-1.jpg",size:"xs",className:"mr-2 mt-1"}),e.jsx("div",{className:"bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-lg rounded-bl-none max-w-md shadow-sm border border-gray-200 dark:border-gray-600",children:e.jsx("p",{children:"Yes, I just looked at them. They look amazing! 🎨"})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-primary-600 text-white p-3 rounded-lg rounded-br-none max-w-md shadow-sm",children:e.jsx("p",{children:"Great! Let's deploy them."})})})]}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{color:"gray",pill:!0,size:"sm",className:"hidden sm:inline-flex",children:e.jsx(x,{className:"h-6 w-6 text-gray-500"})}),e.jsx(s,{color:"gray",pill:!0,size:"sm",className:"hidden sm:inline-flex",children:e.jsx(d,{className:"h-6 w-6 text-gray-500"})}),e.jsx("div",{className:"flex-1",children:e.jsx(l,{placeholder:"Write a message..."})}),e.jsx(s,{color:"primary",pill:!0,children:e.jsx(g,{className:"h-5 w-5 rotate-90"})})]})})]})]})})},N=function(){return e.jsx(i,{title:"Chat Bubbles",description:"Various styles for chat messages including text, images, files, and replies.",code:`
<div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-8">
  <div className="space-y-4">
    <h4 className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Text Messages</h4>
    <div className="flex items-start gap-2.5">
      <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <p className="text-sm font-normal text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
      </div>
    </div>
    <div className="flex items-start gap-2.5 justify-end">
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-primary-600 rounded-s-xl rounded-ee-xl dark:bg-primary-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-primary-100">
          <span className="text-sm font-semibold text-white">You</span>
          <span className="text-sm font-normal text-primary-200">11:47</span>
        </div>
        <p className="text-sm font-normal text-white">I agree! Let's schedule a release sync.</p>
        <span className="text-sm font-normal text-primary-200 flex items-center justify-end gap-1">Read <HiCheck className="w-4 h-4" /></span>
      </div>
      <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
    </div>
  </div>
  <div className="space-y-4">
    <h4 className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">File Attachment</h4>
    <div className="flex items-start gap-2.5">
      <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Roberta Casas</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">12:00</span>
        </div>
        <div className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">Check out the new design specs.</div>
        <div className="flex items-start bg-gray-50 dark:bg-gray-600 rounded-xl p-2 mb-2">
          <div className="me-2">
            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
              <HiDocumentText className="w-5 h-5" />
              Design_Specs_v2.pdf
            </span>
            <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">12 Pages - 18 MB - PDF</span>
          </div>
          <div className="inline-flex self-center items-center">
            <button className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <HiDownload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="space-y-4">
    <h4 className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Reply Message</h4>
    <div className="flex items-start gap-2.5">
      <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">12:05</span>
        </div>
        <div className="flex items-center gap-2 p-2 mb-2 bg-white rounded-lg dark:bg-gray-600 border border-gray-200 dark:border-gray-500 text-sm italic text-gray-500 dark:text-gray-300">
          <HiReply className="w-4 h-4" />
          <span>Replying to: "Can we change the blue?"</span>
        </div>
        <p className="text-sm font-normal text-gray-900 dark:text-white">No, the blue is part of the brand guidelines.</p>
      </div>
    </div>
  </div>
  <div className="space-y-4">
    <h4 className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Voice Message</h4>
    <div className="flex items-start gap-2.5 justify-end">
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-primary-600 rounded-s-xl rounded-ee-xl dark:bg-primary-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-primary-100 mb-2">
          <span className="text-sm font-semibold text-white">You</span>
          <span className="text-sm font-normal text-primary-200">12:10</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center p-2 rounded-full bg-white text-primary-700 hover:bg-gray-100">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </svg>
          </button>
          <span className="text-white text-xs font-medium">0:12</span>
          <div className="w-full bg-primary-400 rounded-full h-1">
            <div className="bg-white h-1 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
      </div>
      <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
    </div>
  </div>
</div>
            `,children:e.jsxs("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500 uppercase dark:text-gray-400",children:"Text Messages"}),e.jsxs("div",{className:"flex items-start gap-2.5",children:[e.jsx(a,{rounded:!0,img:"https://flowbite.com/docs/images/people/profile-picture-2.jpg"}),e.jsxs("div",{className:"flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center space-x-2 rtl:space-x-reverse",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:"Bonnie Green"}),e.jsx("span",{className:"text-sm font-normal text-gray-500 dark:text-gray-400",children:"11:46"})]}),e.jsx("p",{className:"text-sm font-normal text-gray-900 dark:text-white",children:"That's awesome. I think our users will really appreciate the improvements."}),e.jsx("span",{className:"text-sm font-normal text-gray-500 dark:text-gray-400",children:"Delivered"})]})]}),e.jsxs("div",{className:"flex items-start gap-2.5 justify-end",children:[e.jsxs("div",{className:"flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-primary-600 rounded-s-xl rounded-ee-xl dark:bg-primary-700",children:[e.jsxs("div",{className:"flex items-center space-x-2 rtl:space-x-reverse text-primary-100",children:[e.jsx("span",{className:"text-sm font-semibold text-white",children:"You"}),e.jsx("span",{className:"text-sm font-normal text-primary-200",children:"11:47"})]}),e.jsx("p",{className:"text-sm font-normal text-white",children:"I agree! Let's schedule a release sync."}),e.jsxs("span",{className:"text-sm font-normal text-primary-200 flex items-center justify-end gap-1",children:["Read ",e.jsx(p,{className:"w-4 h-4"})]})]}),e.jsx(a,{rounded:!0,img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500 uppercase dark:text-gray-400",children:"File Attachment"}),e.jsxs("div",{className:"flex items-start gap-2.5",children:[e.jsx(a,{rounded:!0,img:"https://flowbite.com/docs/images/people/profile-picture-3.jpg"}),e.jsxs("div",{className:"flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center space-x-2 rtl:space-x-reverse",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:"Roberta Casas"}),e.jsx("span",{className:"text-sm font-normal text-gray-500 dark:text-gray-400",children:"12:00"})]}),e.jsx("div",{className:"py-2.5 text-sm font-normal text-gray-900 dark:text-white",children:"Check out the new design specs."}),e.jsxs("div",{className:"flex items-start bg-gray-50 dark:bg-gray-600 rounded-xl p-2 mb-2",children:[e.jsxs("div",{className:"me-2",children:[e.jsxs("span",{className:"flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2",children:[e.jsx(h,{className:"w-5 h-5"}),"Design_Specs_v2.pdf"]}),e.jsx("span",{className:"flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2",children:"12 Pages • 18 MB • PDF"})]}),e.jsx("div",{className:"inline-flex self-center items-center",children:e.jsx("button",{className:"inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:e.jsx(y,{className:"w-5 h-5"})})})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500 uppercase dark:text-gray-400",children:"Reply Message"}),e.jsxs("div",{className:"flex items-start gap-2.5",children:[e.jsx(a,{rounded:!0,img:"https://flowbite.com/docs/images/people/profile-picture-4.jpg"}),e.jsxs("div",{className:"flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center space-x-2 rtl:space-x-reverse mb-2",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:"Jese Leos"}),e.jsx("span",{className:"text-sm font-normal text-gray-500 dark:text-gray-400",children:"12:05"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 mb-2 bg-white rounded-lg dark:bg-gray-600 border border-gray-200 dark:border-gray-500 text-sm italic text-gray-500 dark:text-gray-300",children:[e.jsx(f,{className:"w-4 h-4"}),e.jsx("span",{children:'Replying to: "Can we change the blue?"'})]}),e.jsx("p",{className:"text-sm font-normal text-gray-900 dark:text-white",children:"No, the blue is part of the brand guidelines."})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500 uppercase dark:text-gray-400",children:"Voice Message"}),e.jsxs("div",{className:"flex items-start gap-2.5 justify-end",children:[e.jsxs("div",{className:"flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-primary-600 rounded-s-xl rounded-ee-xl dark:bg-primary-700",children:[e.jsxs("div",{className:"flex items-center space-x-2 rtl:space-x-reverse text-primary-100 mb-2",children:[e.jsx("span",{className:"text-sm font-semibold text-white",children:"You"}),e.jsx("span",{className:"text-sm font-normal text-primary-200",children:"12:10"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{className:"inline-flex items-center justify-center p-2 rounded-full bg-white text-primary-700 hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800",children:e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 10 16",children:e.jsx("path",{d:"M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"})})}),e.jsx("span",{className:"text-white text-xs font-medium",children:"0:12"}),e.jsx("div",{className:"w-full bg-primary-400 rounded-full h-1",children:e.jsx("div",{className:"bg-white h-1 rounded-full",style:{width:"45%"}})})]})]}),e.jsx(a,{rounded:!0,img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg"})]})]})]})})},j=function(){return e.jsx(i,{title:"Chat Empty State",description:"A placeholder view shown when there are no messages in the conversation yet.",code:`
<div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
  <div className="mb-6 rounded-full bg-gray-100 dark:bg-gray-700 p-5">
    <HiChatAlt2 className="w-12 h-12 text-gray-400 dark:text-gray-500" />
  </div>
  <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">No messages yet</h3>
  <p className="mb-8 max-w-md text-gray-500 dark:text-gray-400">
    Start a conversation by sending a message to someone. Your chats will appear here.
  </p>
  <Button>
    <HiPencilAlt className="mr-2 h-5 w-5" />
    Start Chatting
  </Button>
</div>
            `,children:e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 px-4 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("div",{className:"mb-6 rounded-full bg-gray-100 dark:bg-gray-700 p-5",children:e.jsx(u,{className:"w-12 h-12 text-gray-400 dark:text-gray-500"})}),e.jsx("h3",{className:"mb-2 text-2xl font-semibold text-gray-900 dark:text-white",children:"No messages yet"}),e.jsx("p",{className:"mb-8 max-w-md text-gray-500 dark:text-gray-400",children:"Start a conversation by sending a message to someone. Your chats will appear here."}),e.jsxs(s,{children:[e.jsx(m,{className:"mr-2 h-5 w-5"}),"Start Chatting"]})]})})},w=function(){const r=[{name:"Bonnie Green",role:"Admin",img:"https://flowbite.com/docs/images/people/profile-picture-3.jpg"},{name:"Jese Leos",role:"Member",img:"https://flowbite.com/docs/images/people/profile-picture-2.jpg"},{name:"Roberta Casas",role:"Member",img:"https://flowbite.com/docs/images/people/profile-picture-1.jpg"},{name:"Michael Gough",role:"Member",img:"https://flowbite.com/docs/images/people/profile-picture-4.jpg"},{name:"Karen Nelson",role:"Member",img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}];return e.jsx(i,{title:"Chat Group Info",description:"A detailed group information panel showing members, shared media, and settings.",code:`
const members = [
  { name: "Bonnie Green", role: "Admin", img: "..." },
  { name: "Jese Leos", role: "Member", img: "..." },
  { name: "Roberta Casas", role: "Member", img: "..." },
  { name: "Michael Gough", role: "Member", img: "..." },
  { name: "Karen Nelson", role: "Member", img: "..." },
];

<div className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
  <div className="bg-gradient-to-r from-primary-500 to-primary-700 h-32"></div>
  <div className="px-6 pb-6 -mt-12">
    <div className="flex justify-center mb-4">
      <Avatar img="..." size="lg" rounded stacked />
    </div>
    <h3 className="text-center text-xl font-semibold text-gray-900 dark:text-white">Design Team</h3>
    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">5 members</p>
    <div className="flex justify-center gap-2 mb-6">
      <Button size="sm" color="primary"><HiPencilAlt className="mr-1 h-4 w-4" />Edit Group</Button>
      <Button size="sm" color="gray"><HiDotsHorizontal className="h-4 w-4" /></Button>
    </div>
    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Members</h4>
    <div className="space-y-3 mb-6">
      {members.map((member) => (
        <div key={member.name} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar rounded img={member.img} size="sm" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Shared Media</h4>
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
          <HiPhotograph className="w-6 h-6" />
        </div>
      ))}
    </div>
  </div>
</div>
            `,children:e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden",children:[e.jsx("div",{className:"bg-gradient-to-r from-primary-500 to-primary-700 h-32"}),e.jsxs("div",{className:"px-6 pb-6 -mt-12",children:[e.jsx("div",{className:"flex justify-center mb-4",children:e.jsx(a,{img:"https://flowbite.com/docs/images/people/profile-picture-3.jpg",size:"lg",rounded:!0,stacked:!0})}),e.jsx("h3",{className:"text-center text-xl font-semibold text-gray-900 dark:text-white",children:"Design Team"}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mb-6",children:"5 members"}),e.jsxs("div",{className:"flex justify-center gap-2 mb-6",children:[e.jsxs(s,{size:"sm",children:[e.jsx(m,{className:"mr-1 h-4 w-4"}),"Edit Group"]}),e.jsx(s,{size:"sm",color:"gray",children:e.jsx(b,{className:"h-4 w-4"})})]}),e.jsx("h4",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-3",children:"Members"}),e.jsx("div",{className:"space-y-3 mb-6",children:r.map(t=>e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{rounded:!0,img:t.img,size:"sm"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:t.name}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:t.role})]})]})},t.name))}),e.jsx("h4",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-3",children:"Shared Media"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(t=>e.jsx("div",{className:"aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400",children:e.jsx(d,{className:"w-6 h-6"})},t))})]})]})})};export{z as default};
