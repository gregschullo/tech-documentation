(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(2),a=(n(0),n(181));const r={id:"postmortems",title:"Postmortems"},i={unversionedId:"sre/incident-response/postmortems",id:"sre/incident-response/postmortems",isDocsHomePage:!1,title:"Postmortems",description:"Performing Postmortems after incidents is how we learn what we are doing right, where we can improve, and how to not make the same mistake again and again.",source:"@site/docs/sre/incident-response/postmortems.md",slug:"/sre/incident-response/postmortems",permalink:"/docs/sre/incident-response/postmortems",version:"current",sidebar:"incidentresponse",previous:{title:"Incident Command System",permalink:"/docs/sre/incident-response/incident-command-system"}},s=[{value:"Purpose",id:"purpose",children:[]},{value:"Contents",id:"contents",children:[]},{value:"Postmortem Basics and Introduction",id:"postmortem-basics-and-introduction",children:[{value:"Why to Do Postmortems",id:"why-to-do-postmortems",children:[]},{value:"When to Do Postmortems",id:"when-to-do-postmortems",children:[]},{value:"Who is Responsible for the Postmortem",id:"who-is-responsible-for-the-postmortem",children:[]},{value:"Ownership Criteria",id:"ownership-criteria",children:[]}]},{value:"Blame and Biases in the Workplace",id:"blame-and-biases-in-the-workplace",children:[{value:"Why Blamelessness is Hard",id:"why-blamelessness-is-hard",children:[]},{value:"Common Biases",id:"common-biases",children:[]},{value:"How to Avoid Blame",id:"how-to-avoid-blame",children:[]}]},{value:"Introducing Postmortems to Your Organization",id:"introducing-postmortems-to-your-organization",children:[{value:"Psychological Safety",id:"psychological-safety",children:[]}]},{value:"The Postmortem Report",id:"the-postmortem-report",children:[{value:"Important Concepts to Include in Every Analysis",id:"important-concepts-to-include-in-every-analysis",children:[]},{value:"Helpful Questions",id:"helpful-questions",children:[]},{value:"Follow Up Actions",id:"follow-up-actions",children:[]},{value:"External Messaging",id:"external-messaging",children:[]},{value:"Postmortem Review",id:"postmortem-review",children:[]},{value:"Do&#39;s and Don&#39;ts of Postmortem Review",id:"dos-and-donts-of-postmortem-review",children:[]}]},{value:"Putting Concept into Practice",id:"putting-concept-into-practice",children:[]},{value:"Quick Tips for Success",id:"quick-tips-for-success",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Other Postmortem Resources",id:"other-postmortem-resources",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Performing Postmortems after incidents is how we learn what we are doing right, where we can improve, and how to not make the same mistake again and again."),Object(a.b)("h2",{id:"purpose"},"Purpose"),Object(a.b)("p",null,"The intention of this document is to help with understanding the value behind running consistent postmortems, defining what a postmortem is and best practices for them, identifying different forms of biases in the workplace and how to combat them, and how to build a culture of blamelessness and continuous learning."),Object(a.b)("h2",{id:"contents"},"Contents"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#postmortem-basiscs-and-introduction"}),"Postmortem Basics and Introduction"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#blame-and-biases-in-the-workplace"}),"Blame and Biases in the Workplace"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#introducing-postmortems-to-your-organization"}),"Introducing Postmortems to your Organization"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#the-postmortem-report"}),"The Postmortem Report"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#putting-concept-into-practice"}),"Putting Concept Into Practice"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#quick-tips-for-success"}),"Quick Tips for Success"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#summary"}),"Summary"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#other-postmortem-resources"}),"Other Postmortem Resources"),"  "),Object(a.b)("h2",{id:"postmortem-basics-and-introduction"},"Postmortem Basics and Introduction"),Object(a.b)("h3",{id:"why-to-do-postmortems"},"Why to Do Postmortems"),Object(a.b)("p",null,"Postmortems provide a peacetime opportunity to dig deep into what what wrong and what went well to improve your incident response process.",Object(a.b)("br",{parentName:"p"}),"\n","A postmortem is a process intended to help you learn from incidents. It typically involves a blame free analysis and discussion soon after an incident takes place.",Object(a.b)("br",{parentName:"p"}),"\n","Other ways to describe a postmortem:  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"After-Action Review"),Object(a.b)("li",{parentName:"ul"},"Post-Incident Review"),Object(a.b)("li",{parentName:"ul"},"Learning Review"),Object(a.b)("li",{parentName:"ul"},"Incident Review"),Object(a.b)("li",{parentName:"ul"},"Incident Report")),Object(a.b)("p",null,"Avoid Root Cause Analysis (RCA) whenever possible. This is because there are often many contributing factors to the cause of an incident.  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The postmortem process drives focus, instills a culture of learning, and identifies opportunities for improvement that otherwise would be lost."),"  "),Object(a.b)("p",null,"Write postmortems in a way in which people actually want to read them.  "),Object(a.b)("h3",{id:"when-to-do-postmortems"},"When to Do Postmortems"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Do a postmortem after every major incident."),"  "),Object(a.b)("h3",{id:"who-is-responsible-for-the-postmortem"},"Who is Responsible for the Postmortem"),Object(a.b)("p",null,"The Incident Commander selects and directly notifies one responder to own the postmortem. The owner of the postmortem is not the sole person responsible for completing the postmortem.",Object(a.b)("br",{parentName:"p"}),"\n","Writing a postmortem is a collaborative effort and should include those involved in the incident resolution process.  "),Object(a.b)("p",null,"Important to designate a single owner. Avoid the bystander effect.  "),Object(a.b)("h3",{id:"ownership-criteria"},"Ownership Criteria"),Object(a.b)("p",null,"Designate a ",Object(a.b)("strong",{parentName:"p"},"single owner"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Took leadership role during the incident"),Object(a.b)("li",{parentName:"ul"},"Performed a task that led to stabilizing the service"),Object(a.b)("li",{parentName:"ul"},"Was the primary on-call responder for the most heavily affected service"),Object(a.b)("li",{parentName:"ul"},"Manually triggered the incident to initiate incident response  ")),Object(a.b)("p",null,"The owner of a postmortem is an accountable individual who performs the administrative tasks needed to complete the postmortem. They follow up for information, they drive the postmortem to completion.  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Postmortems are not a punishment"),Object(a.b)("br",{parentName:"p"}),"\n","Very rarely a single cause to any incident. More often than not, multiple sources can be identified.  "),Object(a.b)("h2",{id:"blame-and-biases-in-the-workplace"},"Blame and Biases in the Workplace"),Object(a.b)("p",null,"Blame is not healthy for our team.",Object(a.b)("br",{parentName:"p"}),"\n","Failure is inevidible in large systems.  "),Object(a.b)("p",null,"Old way of thinking about human error: human error causes problems.",Object(a.b)("br",{parentName:"p"}),"\n","New way of thinking about human error: human error is a symptom of a systemic problem.  "),Object(a.b)("p",null,"The impulse to blame and punish has the unintended effect of disincentivizing the knowledge sharing required to learn from incidents.  "),Object(a.b)("p",null,"The goal of the postmortem is to understand the systemic factors leading to the incident and identify actions that can improve the resiliency of the affected systems.  "),Object(a.b)("h3",{id:"why-blamelessness-is-hard"},"Why Blamelessness is Hard"),Object(a.b)("p",null,"J. Paul Reed argues that blamelessness is a myth and is unachievable by humans.",Object(a.b)("br",{parentName:"p"}),"\n",'"Humans are hardwired through millions of years of evolutionary neurobiology and thousands of years of social conditioning to use the technique of blaming as a way to give voice to painful and uncomfortable feelings, in order to effectively disperse them from our psyches."  '),Object(a.b)("p",null,"It is more productive to be ",Object(a.b)("strong",{parentName:"p"},"blame aware"),".",Object(a.b)("br",{parentName:"p"}),"\n","Becoming aware of our biases, we can identify when they occur and work to move past them.  "),Object(a.b)("h3",{id:"common-biases"},"Common Biases"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Fundamental Attribution Error")," - Tendency to believe what people do reflects their character rather than their circumstances.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This bias is tied to the old way of thinking about human error (assigning responsibility to bad actors).  "),Object(a.b)("li",{parentName:"ul"},"To combat this bias, try to intentionally focus on situational causes rather than on discrete actions individuals take.  "),Object(a.b)("li",{parentName:"ul"},"Discuss 'what' questions instead of 'who'. Focus on the system, infrastructure, and the situation - not the people involved.  ")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Confirmation Bias")," - Tendency to favor information that reinforces existing beliefs/positions.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To combat this bias, appoint someone to play devils advocate to take a different view during the investigation.  ")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Hindsight Bias")," - Seeing the incident as inevitable despite there having been little or no objective basis for predicting it because we know the outcome.   Memory distortion where we recall events to form a judgement. We often recall events in a way that makes ourselves look better.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To combat this bias, explain events in terms of foresight rather than the hindsight. Start your timeline analysis from a point before the incident and work forward, rather than from resolution and working backwards.  ")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Negativity Bias")," - Notion that things of a more negative nature have a greater effect on our mental state than those things that are of neutral or positive nature.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Things tend to go right much more frequently than they go wrong, but it is in our nature as humans to focus much more energy and importance on what goes wrong."),Object(a.b)("li",{parentName:"ul"},"Focusing on, exaggerating, and internalizing incidents as negative events can be demoralizing and can lead to burnout. Rethink/Rephrase incidents as learning opportunities and an opportunity to make our applications and services better.  ")),Object(a.b)("h3",{id:"how-to-avoid-blame"},"How to Avoid Blame"),Object(a.b)("p",null,'Ask "what" and "how" questions rather than "who" or "why".',Object(a.b)("br",{parentName:"p"}),"\n","Ask why a reasonable, rational, and decent person may have taken a particular action. Avoid victim vs villain mentalities.",Object(a.b)("br",{parentName:"p"}),"\n","Consider multiple and diverse perspectives.",Object(a.b)("br",{parentName:"p"}),"\n","Abstract to an inspecific responder.  "),Object(a.b)("h2",{id:"introducing-postmortems-to-your-organization"},"Introducing Postmortems to Your Organization"),Object(a.b)("p",null,"As leaders, you must help introduce blameless postmortems.",Object(a.b)("br",{parentName:"p"}),"\n","Driving culture change is difficult. Get buy in from contributors and leadership.",Object(a.b)("br",{parentName:"p"}),"\n","Sell the business value of blamelessness.",Object(a.b)("br",{parentName:"p"}),"\n","Acknowledge that practicing blamelessness is difficult for everyone.",Object(a.b)("br",{parentName:"p"}),"\n","Blame is harmful to trust and collaboration. Work together to be more blame aware.  "),Object(a.b)("p",null,"Build a culture of continuous learning.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Adopt culture change that promotes blamelessness"),Object(a.b)("li",{parentName:"ul"},"Recognize and reduce patterns that make a team susceptible to blame")),Object(a.b)("h3",{id:"psychological-safety"},"Psychological Safety"),Object(a.b)("p",null,"For a blameless culture to exist, people need to feel comfortable and safe when talking about failure. They need to feel safe before they will be willing to talk about incidents.",Object(a.b)("br",{parentName:"p"}),"\n",'"Psychological safety is a sense of confidence the team will not embarrass, reject, or punish someone for speaking up." - Amy Edmondson, Harvard Business School',Object(a.b)("br",{parentName:"p"}),"\n","The number 1 thing you can do for your teams is to build a culture of psychological safety with blameless postmortems.",Object(a.b)("br",{parentName:"p"}),"\n","Psychological safety is a key driver of high performing software delivery teams.  "),Object(a.b)("h2",{id:"the-postmortem-report"},"The Postmortem Report"),Object(a.b)("p",null,"Start analysis by looking at the monitoring attached to affected services. Search for irregularities from the baseline such as spikes or flatlines when the incident began and leading up to the incident.  "),Object(a.b)("p",null,"Ask why the system was designed in a way to make the incident possible. Why did those design decisions seem to be the best decision at the time? Answering these questions can be helpful in uncovering the contributing factors that lead to the incident.  "),Object(a.b)("p",null,"Participants in a postmortem meeting:",Object(a.b)("br",{parentName:"p"}),"\n","Incident Commander",Object(a.b)("br",{parentName:"p"}),"\n","Incident Commander Shadow, Scribe, Deputy, Liaison",Object(a.b)("br",{parentName:"p"}),"\n","Service Owners",Object(a.b)("br",{parentName:"p"}),"\n","Product Managers",Object(a.b)("br",{parentName:"p"}),"\n","Engineering Managers  "),Object(a.b)("h3",{id:"important-concepts-to-include-in-every-analysis"},"Important Concepts to Include in Every Analysis"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Avoid the concept of "human error"'),Object(a.b)("li",{parentName:"ul"},"Discuss incidents within the frame of the health and resiliency of affected services")),Object(a.b)("p",null,"Conducting effecting meetings"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Documenting an accurate timeline of events"),Object(a.b)("li",{parentName:"ul"},"Effective action items")),Object(a.b)("p",null,"An individual's action should never be considered a root cause.  "),Object(a.b)("h3",{id:"helpful-questions"},"Helpful Questions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Is this an isolated incident or part of a trend?  "),Object(a.b)("li",{parentName:"ul"},"Was there a specific bug, a failure in a class of problem we anticipated, or did it uncover a class of issue we did not architecturally anticipate?  "),Object(a.b)("li",{parentName:"ul"},"Was there work the team chose not to do in the past that contributed to this incident?  "),Object(a.b)("li",{parentName:"ul"},"Research if there were any similar or related incidents in the past. Does this incident demonstrate a larger trend in your system?  "),Object(a.b)("li",{parentName:"ul"},"Will this class of issue get worse or more likely as you continue to grow and scale the use of the service?  ")),Object(a.b)("h3",{id:"follow-up-actions"},"Follow Up Actions"),Object(a.b)("p",null,"Actionable"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Phrase each action item as a sentence start with a verb"),Object(a.b)("li",{parentName:"ul"},"The action should result in a useful outcome")),Object(a.b)("p",null,"Specific"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Define each action item's scope as narrowly as possible"),Object(a.b)("li",{parentName:"ul"},"Make it clear what is in and out of scope")),Object(a.b)("p",null,"Bounded"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Word each action item to indicate how to tell when it is finished"),Object(a.b)("li",{parentName:"ul"},"Avoid open-ended or ongoing tasks")),Object(a.b)("h3",{id:"external-messaging"},"External Messaging"),Object(a.b)("p",null,"Different than internal messaging. External messaging is a summarized and sanitized version of information used internally.",Object(a.b)("br",{parentName:"p"}),"\n","The goal of external messaging is to build trust with customers. Give enough information about what happened and what you are doing about it without revealing too much information.  "),Object(a.b)("p",null,"Summary - Two or three sentences that summarize the duration of the incident, and the observable customer impact.",Object(a.b)("br",{parentName:"p"}),"\n","What Happened - Summary of contributing factors. Summary of customer-facing impact during the incident. Summary of mitigation efforts during the incident.",Object(a.b)("br",{parentName:"p"}),"\n","What Are We Doing About This - Summary of action items.  "),Object(a.b)("h3",{id:"postmortem-review"},"Postmortem Review"),Object(a.b)("p",null,"Postmortem Writing & Collaboration Community  "),Object(a.b)("p",null,"Does the postmortem provide enough detail?",Object(a.b)("br",{parentName:"p"}),"\n","Rather than just pointing out what went wrong, does it drill down to the underlying causes of the issue?",Object(a.b)("br",{parentName:"p"}),"\n",'Does it separate "What happened?" from "How to fix it?"',Object(a.b)("br",{parentName:"p"}),"\n","Do the proposed action items make sense? Are they well-scoped enough?",Object(a.b)("br",{parentName:"p"}),"\n","Is the postmortem well-written and understandable?",Object(a.b)("br",{parentName:"p"}),"\n","Does the external message resonate with customers or is it likely to cause outrage?  "),Object(a.b)("h3",{id:"dos-and-donts-of-postmortem-review"},"Do's and Don'ts of Postmortem Review"),Object(a.b)("p",null,"Dos:",Object(a.b)("br",{parentName:"p"}),"\n","Make sure timeline is an accurate representation of events.",Object(a.b)("br",{parentName:"p"}),"\n","Define technical lingo for newcomers.",Object(a.b)("br",{parentName:"p"}),"\n","Separate what happened from how to fix it.",Object(a.b)("br",{parentName:"p"}),"\n","Discuss how incidents fit into health and resiliency of services.  "),Object(a.b)("p",null,"Don'ts:",Object(a.b)("br",{parentName:"p"}),"\n",'Don\'t use the word "outage" unless it really was a full outage.',Object(a.b)("br",{parentName:"p"}),"\n",'Don\'t change details to make things "look better."',Object(a.b)("br",{parentName:"p"}),"\n","Don't name and shame.",Object(a.b)("br",{parentName:"p"}),"\n",'Avoid the concept of "human error."  '),Object(a.b)("h2",{id:"putting-concept-into-practice"},"Putting Concept into Practice"),Object(a.b)("p",null,"Create a community of experienced postmortem writers to review drafts and spread good practices.  "),Object(a.b)("p",null,"Information Sharing",Object(a.b)("br",{parentName:"p"}),"\n","Scale culture through sharing. Adopt practices that promote openness and sharing of information.",Object(a.b)("br",{parentName:"p"}),"\n","People want to share their successes and people want to replicate practices that result in success.",Object(a.b)("br",{parentName:"p"}),"\n","Information sharing and transparency promotes a culture of accountability.  "),Object(a.b)("p",null,"Schedule postmortem meetings on a shared calendar.  "),Object(a.b)("p",null,"Email completed postmortems to all teams involved in incident response. An alternative to this may be to put postmortems in a public GitHub repository.  "),Object(a.b)("h2",{id:"quick-tips-for-success"},"Quick Tips for Success"),Object(a.b)("p",null,"Develop good facilitators.",Object(a.b)("br",{parentName:"p"}),"\n","The facilitator has a different role than others on the postmortem call/meeting/discussion. They will not share their opinions or participate in the discussion. They will keep the meeting on track and nothing more.  "),Object(a.b)("p",null,"Facilitator Responsibilities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Reads non-verbal cues to assess how people are feeling. Sees who might have something to say.  "),Object(a.b)("li",{parentName:"ul"},"Paraphrases what is said to clarify for self and others. Asks open questions that stimulate deeper thinking.  "),Object(a.b)("li",{parentName:"ul"},"Comfortable interrupting when discussion gets off track or someone is dominating the conversation. Redirects conversation to focus on goals.  "),Object(a.b)("li",{parentName:"ul"},"Drives discussion to decision making and action items. Develop a community of experienced facilitators to develop good practices.  ")),Object(a.b)("p",null,"Start Small  "),Object(a.b)("p",null,"Being transparent about system failure reinforces a culture of blamelessness.  "),Object(a.b)("p",null,"Clarify policy and ownership of postmortem action items.  "),Object(a.b)("p",null,"Engage leaders that prioritize work.  "),Object(a.b)("p",null,"An essential outcome of the postmortem meeting is buy-in for the action plan.  "),Object(a.b)("p",null,"There is no single root cause of major failure in complex systems, but rather a combination of contributing factors that together lead to failure.",Object(a.b)("br",{parentName:"p"}),"\n","An individual's action should never be considered a root cause.  "),Object(a.b)("p",null,'"All practitioner actions are actually gambles, that is, acts that take place in the face of uncertain outcomes." - Dr Richard Cook, Department of Integrated Systems Engineering at Ohio State University.  '),Object(a.b)("p",null,"Avoid Blame.",Object(a.b)("br",{parentName:"p"}),"\n","Practice makes perfect.  "),Object(a.b)("h2",{id:"summary"},"Summary"),Object(a.b)("p",null,"Improve Team Culture"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Postmortems can drive a culture of continuous improvement.  "),Object(a.b)("li",{parentName:"ul"},"The number one thing you can do for your teams is support a culture of psychological safety.  ")),Object(a.b)("p",null,"Reduce Blame"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Blame disincentivizes the knowledge sharing required to improve system resiliency.  "),Object(a.b)("li",{parentName:"ul"},"An individual's actions should never be considered a root cause.  ")),Object(a.b)("p",null,"Focus on Circumstances"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Ask "what" and "how" questions, rather than "who" and "why."  '),Object(a.b)("li",{parentName:"ul"},"There is no single root cause, but a combination of contributing factors.  ")),Object(a.b)("p",null,"Take Action"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Understand systemic factors that led to the incident  "),Object(a.b)("li",{parentName:"ul"},"An essential outcome of the postmortem meeting is buy-in for the action plan")),Object(a.b)("h2",{id:"other-postmortem-resources"},"Other Postmortem Resources"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://postmortems.pagerduty.com/"}),"PagerDuty Postmortems"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://landing.google.com/sre/sre-book/chapters/postmortem-culture/"}),"Google Postmortem Culture: Learning from Failure"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/dastergon/awesome-sre#post-mortem"}),"Awesome SRE Postmortem"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://codeascraft.com/2012/05/22/blameless-postmortems/"}),"Etsy Blameless Postmortem"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=UBe7U2b3tsA&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=10"}),"Postmortems and Retrospectives - Google Cloud Platform")))}l.isMDXComponent=!0},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=b(n),u=o,d=m["".concat(i,".").concat(u)]||m[u]||p[u]||r;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);