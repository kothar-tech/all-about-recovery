export type Accent = "sage" | "terracotta" | "teal";

export type Service = {
  slug: string;
  title: string;
  /** Short label for nav, chips and marquee */
  shortTitle: string;
  /** Hero sub-headline on the service page */
  tagline: string;
  /** One-paragraph summary used on cards and the services index */
  summary: string;
  /** SEO meta description */
  metaDescription: string;
  accent: Accent;
  cardImage: string;
  heroImage: string;
  imageAlt: string;
  intro: { heading: string; body: string[] };
  offerings: { title: string; body: string }[];
  assurance: { heading: string; body: string[] };
  differentiators: { title: string; body: string }[];
  expectations: string[];
};

export const services: Service[] = [
  {
    slug: "daily-living-support",
    title: "Daily Living Support",
    shortTitle: "Daily Living Support",
    tagline:
      "Practical, trauma-informed help with the everyday things that quietly build toward independence.",
    summary:
      "Help with the everyday things that build toward independence — from managing routines to navigating community spaces, with support that understands trauma and puts your safety first.",
    metaDescription:
      "NDIS daily living support in Sydney, Dubbo and Tamworth. Trauma-informed help with routines, personal care, household tasks and getting out into the community, at your pace.",
    accent: "sage",
    cardImage: "/images/coffee-conversation.webp",
    heroImage: "/images/support-hands-table.webp",
    imageAlt:
      "A support worker and participant sitting together over a cup of coffee, talking",
    intro: {
      heading: "Independence is built in ordinary moments.",
      body: [
        "Getting the washing done. Making it to an appointment. Cooking a meal that you actually want to eat. These are the moments where independence is genuinely built — not in a plan review, but in an ordinary Tuesday that went the way you wanted it to.",
        "Our daily living support is designed to meet you exactly where you are. Some people want a hand for a few hours a week. Others want consistent daily support while things settle. Both are completely valid, and both get the same care and respect from our team.",
      ],
    },
    offerings: [
      {
        title: "Personal care and daily routines",
        body: "Respectful, dignified support with showering, dressing, medication prompts and the routines that hold a day together — delivered the way you prefer it, every time.",
      },
      {
        title: "Household and life admin",
        body: "Cooking, cleaning, shopping, budgeting and the paperwork that piles up. We do it alongside you where we can, so skills build rather than dependence.",
      },
      {
        title: "Getting out and about",
        body: "Transport and in-person support to appointments, work, study and community spaces — with the planning and reassurance that makes leaving the house feel possible.",
      },
    ],
    assurance: {
      heading: "Support that follows your lead, not a checklist.",
      body: [
        "We do not arrive with a clipboard and a fixed idea of what your day should look like. We ask what would genuinely help, we agree on it together, and we show up and do it — reliably.",
        "Our workers are trained in trauma-informed practice, which in plain terms means we pay attention to safety, choice and predictability. No surprises, no pressure, and no assumptions about what you can or cannot do.",
      ],
    },
    differentiators: [
      {
        title: "Consistency you can plan around",
        body: "The same familiar faces wherever possible, so you are not re-explaining your life to a stranger every fortnight.",
      },
      {
        title: "Skill-building, not doing-for",
        body: "Wherever you want to learn something, we do it with you rather than for you — so independence grows in a way that lasts.",
      },
      {
        title: "Trauma-informed from the first visit",
        body: "Safety, choice and control shape every interaction, not just the ones where something has gone wrong.",
      },
    ],
    expectations: [
      "Support hours built around your routine, not our roster.",
      "Workers matched thoughtfully to your preferences, culture and communication style.",
      "Honest conversations when something is not working — and a plan to change it.",
    ],
  },
  {
    slug: "goal-focused-support",
    title: "Goal-Focused Support",
    shortTitle: "Goal-Focused Support",
    tagline:
      "Your goals are your own. We help you move toward them at a pace that actually works for you.",
    summary:
      "Your goals are your own. We're here to help you work toward them at your pace, whether that's building life skills, strengthening relationships, or increasing your independence.",
    metaDescription:
      "Goal-focused NDIS support that helps you build life skills, strengthen relationships and grow independence at your own pace, across Sydney, Dubbo and Tamworth.",
    accent: "terracotta",
    cardImage: "/images/celebration-highfive.webp",
    heroImage: "/images/planning-session.webp",
    imageAlt:
      "Two people mapping out plans together at a table, writing in a notebook",
    intro: {
      heading: "A goal only matters if it is genuinely yours.",
      body: [
        "Plenty of people arrive with goals that were written for them rather than by them. We start by putting that aside and asking a better question: what would make your life feel more like your own?",
        "From there we work backwards — breaking something big and daunting into steps small enough to actually start this week, and steady enough to keep going when motivation dips.",
      ],
    },
    offerings: [
      {
        title: "Life skills that transfer",
        body: "Cooking, budgeting, travel training, digital skills and self-advocacy — practised in real settings so they hold up outside a support session.",
      },
      {
        title: "Relationships and confidence",
        body: "Support to rebuild connections, set boundaries and take social risks again, with someone in your corner while you do it.",
      },
      {
        title: "Work, study and purpose",
        body: "Whether it is volunteering, a course or a return to work, we help you take the next realistic step and plan for the wobbles.",
      },
    ],
    assurance: {
      heading: "Progress is rarely a straight line — and that is fine.",
      body: [
        "Some weeks you will surprise yourself. Other weeks getting through the day is the achievement, and we will say so plainly rather than pretending otherwise.",
        "We track progress in a way that is visible and encouraging, so you can see how far you have come even on the days it does not feel like it.",
      ],
    },
    differentiators: [
      {
        title: "Your pace sets the schedule",
        body: "We never push a timeline for the sake of a report. Momentum that lasts beats momentum that burns out.",
      },
      {
        title: "Goals broken into real steps",
        body: "Every goal turns into something you could start this week — specific, achievable and yours to adjust.",
      },
      {
        title: "Wins get noticed",
        body: "We mark progress properly, because recognition is part of what keeps people going.",
      },
    ],
    expectations: [
      "Goals written in your words, reviewed whenever your priorities shift.",
      "Practical steps you can start immediately, not aspirations parked for later.",
      "A team that celebrates the small wins as loudly as the big ones.",
    ],
  },
  {
    slug: "community-connection",
    title: "Community Connection",
    shortTitle: "Community Connection",
    tagline:
      "Belonging is not optional. We help you find places and people where you genuinely fit.",
    summary:
      "Feeling included and connected matters. We support you to engage with community in ways that feel meaningful and safe for you.",
    metaDescription:
      "NDIS community participation support in Sydney, Dubbo and Tamworth — helping you build genuine connection, social confidence and belonging at a pace that feels safe.",
    accent: "teal",
    cardImage: "/images/outdoor-group-chat.webp",
    heroImage: "/images/community-event.webp",
    imageAlt: "A group of people connecting warmly at a community gathering",
    intro: {
      heading: "Isolation is one of the hardest parts — and one of the most fixable.",
      body: [
        "For a lot of the people we work with, the hardest part of a psychosocial disability is not the diagnosis. It is the slow narrowing of a world until it fits inside one room.",
        "Community connection support is about widening that again, carefully. Not by signing you up to a crowded group program on day one, but by finding the one place, activity or person where being yourself feels uncomplicated.",
      ],
    },
    offerings: [
      {
        title: "Finding the right fit",
        body: "We take time to understand your interests, culture and energy levels before suggesting anything — because the wrong group is worse than no group.",
      },
      {
        title: "Coming along at first",
        body: "A familiar person beside you for the first few visits, stepping back as soon as you would rather we did.",
      },
      {
        title: "Social confidence, rebuilt",
        body: "Practical support with conversation, transport, planning and the anxiety that shows up before you walk through the door.",
      },
    ],
    assurance: {
      heading: "Connection at your pace, never on display.",
      body: [
        "You will never be pushed into a room you are not ready for, and you will never be treated as a participant being 'taken out' somewhere. You are a person going about your life, with a bit of support alongside.",
        "If something does not work, we say so honestly and try something else. Finding your people can take a few attempts, and that is completely normal.",
      ],
    },
    differentiators: [
      {
        title: "Interests first, programs second",
        body: "We start from what you actually enjoy rather than what happens to have a vacancy.",
      },
      {
        title: "Local knowledge that matters",
        body: "Real familiarity with what is on in Penrith, Dubbo and Tamworth — including the quieter options that never get advertised.",
      },
      {
        title: "Support that fades by design",
        body: "The goal is that you keep going without us. We plan for that from the start.",
      },
    ],
    expectations: [
      "Activities chosen around your interests, culture and comfort level.",
      "Company for the first few visits, then space as your confidence grows.",
      "No pressure, no performance, and no judgement if you need to step back.",
    ],
  },
  {
    slug: "mental-health-support",
    title: "Mental Health Support",
    shortTitle: "Mental health Support",
    tagline:
      "Walking alongside you through mental health challenges — with the understanding, consistency and genuine care you deserve.",
    summary:
      "Mental health looks different for everyone. We take the time to understand who you are and provide personalised support that celebrates your strengths and meets you where you're at.",
    metaDescription:
      "Personalised NDIS mental health and psychosocial support in Sydney, Dubbo and Tamworth. Behaviour support, supported independent living and consistent, stigma-free care.",
    accent: "sage",
    cardImage: "/images/care-closeness.webp",
    heroImage: "/images/bench-conversation-bw.webp",
    imageAlt:
      "Two people sitting side by side on a park bench, in quiet conversation",
    intro: {
      heading: "Mental health is personal.",
      body: [
        "At All About Recovery, we don't lead with labels or checklists. We lead with curiosity — taking the time to understand who you are, what you're experiencing, and what support actually means to you.",
        "Our trained team walks alongside you through anxiety, depression, behavioural challenges, and everything in between — not with clinical distance, but with genuine human care.",
      ],
    },
    offerings: [
      {
        title: "Mental health and psychosocial support",
        body: "Personalised, ongoing support for people living with mental health challenges — built around your needs, your goals, and your experience.",
      },
      {
        title: "Behaviour support",
        body: "Compassionate, evidence-informed support for people experiencing behavioural challenges, delivered by qualified Behaviour Support Practitioners who see the person behind the behaviour.",
      },
      {
        title: "Supported independent living",
        body: "For people who need consistent mental health support at home, we provide the kind of steady, trusted presence that makes daily life feel more manageable.",
      },
    ],
    assurance: {
      heading: "Mental health support is only meaningful when it feels safe.",
      body: [
        "We work hard to create an environment where you feel seen, heard, and respected — free from the stigma and assumptions that too many people have already experienced elsewhere.",
        "Our team brings patience, empathy, and a genuine commitment to understanding the unique qualities that make you who you are.",
      ],
    },
    differentiators: [
      {
        title: "No judgement. Ever.",
        body: "We create a space where you can be honest about where you're at — without fear of stigma, assumptions, or being reduced to a diagnosis.",
      },
      {
        title: "Specialist knowledge, human heart",
        body: "Our team includes qualified Behaviour Support Practitioners and trained mental health professionals who lead with empathy as much as expertise.",
      },
      {
        title: "Consistent support through the hard moments",
        body: "Mental health isn't linear. We show up — reliably, patiently, and with genuine care — through the highs and the harder days alike.",
      },
    ],
    expectations: [
      "A team that takes the time to truly understand your experience.",
      "Support that adapts to where you are — not where we expect you to be.",
      "A safe, consistent presence through every step of your recovery.",
    ],
  },
  {
    slug: "support-coordination-and-recovery-coaching",
    title: "Support Coordination & Recovery Coaching",
    shortTitle: "Support Coordination & Recovery Coaching",
    tagline:
      "Make your NDIS plan actually work — with someone experienced in your corner.",
    summary:
      "We help you understand, navigate and get the most out of your NDIS plan. Our experienced coordinators connect you with the right services, advocate for the funding you need, and keep your plan working as your life changes.",
    metaDescription:
      "NDIS support coordination and psychosocial recovery coaching in Sydney, Dubbo and Tamworth. Understand your plan, find the right providers and advocate for the funding you need.",
    accent: "terracotta",
    cardImage: "/images/workshop-collaboration.webp",
    heroImage: "/images/workshop-collaboration.webp",
    imageAlt:
      "A coordinator and participant reviewing plan documents together at a table",
    intro: {
      heading: "A plan is only as good as what you can actually use.",
      body: [
        "NDIS plans are dense, the language is technical, and the gap between what is funded and what you can find in your area can be genuinely disheartening. That gap is where we work.",
        "Whether you have Support Coordination or Psychosocial Recovery Coaching in your plan, you get someone who knows the system, knows the local providers, and will tell you honestly what is realistic.",
      ],
    },
    offerings: [
      {
        title: "Understanding your plan",
        body: "A plain-English walkthrough of what is funded, what it can be used for, and what you are not obliged to spend it on.",
      },
      {
        title: "Connecting you with the right providers",
        body: "Matched to your needs and your preferences — including the providers we would not send our own family to, so you can avoid them.",
      },
      {
        title: "Recovery coaching",
        body: "Psychosocial recovery coaches who understand mental health from the inside of the system, helping you build capacity and stay steady between plan reviews.",
      },
    ],
    assurance: {
      heading: "We advocate — properly, and in writing.",
      body: [
        "When a plan does not reflect your actual needs, we help you gather the evidence, write the request and push for a review. We know what the NDIA responds to and we do not give up at the first 'no'.",
        "Your plan also does not sit still for twelve months. As your life changes, we adjust the supports around it so your funding keeps doing useful work.",
      ],
    },
    differentiators: [
      {
        title: "Experienced in complex plans",
        body: "Psychosocial, forensic and high-intensity plans are routine for our coordinators, not an exception they have to look up.",
      },
      {
        title: "Honest about what is available",
        body: "Especially in regional NSW, where waitlists are real. You get the truth and a workable plan B.",
      },
      {
        title: "Ready long before plan review",
        body: "Evidence gathered and documented all year, so your review is not a scramble in the final fortnight.",
      },
    ],
    expectations: [
      "A clear, plain-English explanation of your plan and your options.",
      "Provider recommendations based on fit, not on who we are connected to.",
      "Active advocacy when your funding does not match your needs.",
    ],
  },
  {
    slug: "complex-care",
    title: "Complex Care",
    shortTitle: "Complex Care",
    tagline:
      "When your needs are more specialised, our qualified team builds care around you — not the other way around.",
    summary:
      "When your needs are more specialised, our qualified team provides compassionate, tailored support — whatever you need, we build care around you.",
    metaDescription:
      "Specialised NDIS complex care and high-intensity support in Sydney, Dubbo and Tamworth, delivered by qualified, clinically supervised staff with care built around you.",
    accent: "teal",
    cardImage: "/images/craft-activity.webp",
    heroImage: "/images/elder-laughing-carer.webp",
    imageAlt: "A support worker sharing a genuine laugh with a participant",
    intro: {
      heading: "Complex needs deserve more than a generic roster.",
      body: [
        "Complex care covers a lot of ground — high-intensity daily supports, co-occurring physical and mental health needs, dual diagnosis, and situations where several services need to work together without dropping the person in the middle.",
        "Our role is to hold that complexity so you do not have to. One coordinated team, one clear plan, and staff qualified for the specific supports you need.",
      ],
    },
    offerings: [
      {
        title: "High-intensity daily supports",
        body: "Delivered by staff trained and signed off for the specific supports required, with clinical oversight and documented competency.",
      },
      {
        title: "Co-occurring and dual diagnosis",
        body: "Support that treats mental health, disability, substance use and physical health as one connected picture rather than separate problems.",
      },
      {
        title: "Coordinated multi-service care",
        body: "We work alongside clinicians, hospitals, allied health and families so information moves properly and nothing falls through the gaps.",
      },
    ],
    assurance: {
      heading: "Specialised does not mean clinical and cold.",
      body: [
        "A higher level of care should never cost you your dignity or your say in your own life. Our team brings the qualifications the work requires and the warmth that makes it bearable.",
        "Every complex care arrangement is supervised, reviewed and adjusted as needs change — with you involved in every decision that affects you.",
      ],
    },
    differentiators: [
      {
        title: "Qualified and supervised",
        body: "Staff matched to the clinical requirements of your supports, with ongoing supervision and refreshed competency checks.",
      },
      {
        title: "One coordinated team",
        body: "We take on the job of keeping every service aligned, so you are not the one chasing them.",
      },
      {
        title: "Built around you",
        body: "Your routines, your preferences and your dignity shape the care plan — the complexity is ours to manage.",
      },
    ],
    expectations: [
      "Staff qualified and signed off for the specific supports you need.",
      "Clear coordination with your clinicians, family and other providers.",
      "A care plan reviewed and adjusted as your needs change.",
    ],
  },
  {
    slug: "justice-and-forensic-care",
    title: "Justice / Forensic Care",
    shortTitle: "Justice / Forensic Care",
    tagline:
      "Specialist support for people involved with the justice system — without judgement, and without giving up on you.",
    summary:
      "Specialist, non-judgemental support for people navigating the justice system — from transition out of custody to meeting order conditions and rebuilding a life outside.",
    metaDescription:
      "NDIS forensic disability and justice support in Sydney, Dubbo and Tamworth. Transition from custody, order compliance and stable, non-judgemental support to rebuild.",
    accent: "sage",
    cardImage: "/images/supportive-hug.webp",
    heroImage: "/images/sitting-together.webp",
    imageAlt:
      "Two people sitting together in a moment of quiet, steady support",
    intro: {
      heading: "A record is not a character reference, and it is not a prognosis.",
      body: [
        "People leaving custody or living under order conditions are among the hardest to place with a provider — and among the most likely to be written off before anyone has met them.",
        "We work in this space deliberately. Our team is experienced with forensic disability supports, the conditions that come with them, and the practical reality of rebuilding a life with very little margin for error.",
      ],
    },
    offerings: [
      {
        title: "Transition from custody",
        body: "Accommodation, identification, income, health care and the first weeks outside — the period where most things fall apart, planned for properly in advance.",
      },
      {
        title: "Meeting order conditions",
        body: "Practical support to understand and meet the conditions you are under, and to communicate clearly with the people supervising them.",
      },
      {
        title: "Stability and reintegration",
        body: "Routine, purpose, connection and the long, unglamorous work of building a life that does not lead back through the same door.",
      },
    ],
    assurance: {
      heading: "We will be straight with you, and we will stay.",
      body: [
        "Our staff are trained for this work and supported in it, which means you get someone steady rather than someone nervous. We are honest about what we can and cannot do, including where we have legal obligations.",
        "Setbacks do not end the relationship. Consistency is the entire point of this work, and it is the thing most people in this position have never actually been given.",
      ],
    },
    differentiators: [
      {
        title: "Experienced in forensic supports",
        body: "Familiar with the orders, the reporting expectations and the agencies involved — no learning on your time.",
      },
      {
        title: "Genuinely non-judgemental",
        body: "We work with the person in front of us. Your history informs your support; it does not define how we treat you.",
      },
      {
        title: "Practical from day one",
        body: "Identification, income, housing and health care sorted early, because stability is what makes everything else possible.",
      },
    ],
    expectations: [
      "A team experienced with justice-involved participants and order conditions.",
      "Clear, honest communication about what we can and cannot do.",
      "Consistent support that does not disappear when things get hard.",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* -------------------------------------------------------------- */
/*  Accommodation support — its own page, its own content shape    */
/* -------------------------------------------------------------- */

export const accommodation = {
  title: "Accommodation Support",
  tagline:
    "Accommodation and living support designed around you — so you can live with comfort, safety, and independence.",
  metaDescription:
    "SIL, SDA, STA, MTA and in-home respite across Sydney, Dubbo and Tamworth. NDIS accommodation support built around your routines, preferences and goals.",
  intro: {
    heading:
      "Where you live shapes your sense of security, independence, and quality of life.",
    body: [
      "At All About Recovery, we work alongside you to find and maintain living arrangements that genuinely work for you. Whether you're looking for long-term supported independent living or need short-term accommodation during a period of change, we're here to make sure you feel safe, supported, and at home.",
    ],
  },
  groups: [
    {
      label: "Independent Living",
      blurb:
        "Independent living looks different for everyone. Whatever your situation, we work with you to find the right fit.",
      accent: "sage" as const,
      items: [
        {
          title: "Supported Independent Living (SIL)",
          body: "SIL is for people who need daily support at home — but who want to live as independently as possible. Our SIL support is built around your routines, your preferences, and your goals. We provide consistent, personalised support with daily tasks, personal care, and everything in between — so you can focus on living your life.",
        },
        {
          title: "Specialist Disability Accommodation (SDA)",
          body: "SDA is purpose-built housing designed for people with extreme functional impairment or very high support needs. If you're eligible for SDA funding through your NDIS plan, we can help you understand your options, navigate the process, and find accommodation that's genuinely suited to your needs.",
        },
      ],
    },
    {
      label: "In-home Respite",
      blurb:
        "Our respite options are designed to feel as comfortable and familiar as possible — for both the person receiving support and the family around them.",
      accent: "terracotta" as const,
      items: [
        {
          title: "Short Term Accommodation (STA)",
          body: "STA provides short-term accommodation and support away from home — giving carers a break while ensuring participants are well cared for in a safe, supportive environment. Whether it's a planned break or an unexpected need, we work to make the transition as smooth and comfortable as possible.",
        },
        {
          title: "Medium Term Accommodation (MTA)",
          body: "MTA is designed for people who need a temporary place to live while longer-term accommodation is being arranged. Whether you're waiting for SDA to become available or transitioning between living arrangements, MTA provides a stable, supported bridge during a period of change.",
        },
      ],
    },
  ],
  differentiators: [
    {
      title: "Support that fits your home and your life",
      body: "We build accommodation support around your routines, your preferences, and your goals — not a generic care model.",
    },
    {
      title: "Experienced guidance through a complex process",
      body: "From SDA eligibility to SIL setup, we help you navigate the process with clarity and confidence — so nothing falls through the cracks.",
    },
    {
      title: "Consistency you can count on",
      body: "Whether you're with us for a weekend or the long term, you'll have a familiar, trusted team who knows you and shows up reliably.",
    },
  ],
  expectations: [
    "Personalised support built around your home, your routine, and your goals.",
    "Clear, honest guidance through every step of the accommodation process.",
    "A consistent, caring team you can trust to show up — every single time.",
  ],
};
