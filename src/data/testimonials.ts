/* ============================================================================
 *  ⚠️  PLACEHOLDER CONTENT — NOT REAL PARTICIPANT QUOTES  ⚠️
 * ----------------------------------------------------------------------------
 *  Every entry below was written as realistic sample copy so the testimonials
 *  UI could be designed and reviewed. NONE of it comes from a real participant,
 *  family member or support coordinator.
 *
 *  BEFORE THIS SITE GOES LIVE:
 *    1. Replace every quote with a genuine one you have collected.
 *    2. Get written consent from each person for the quote AND the name/role
 *       shown beside it. Use first name + initial, or "Participant, Dubbo",
 *       if they would rather not be identified.
 *    3. Delete this banner once the array contains only real, consented quotes.
 *
 *  Publishing invented testimonials as though they were real is misleading
 *  conduct under Australian Consumer Law, and the NDIS Code of Conduct expects
 *  honest, accurate representations from registered providers.
 * ==========================================================================*/

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  /** Optional photo. Leave undefined to render the initial-monogram fallback. */
  avatar?: string;
  accent: "sage" | "terracotta" | "teal";
};

/** Flip to `false` once real quotes are in — hides the dev-only warning badge. */
export const TESTIMONIALS_ARE_PLACEHOLDER = true;

export const testimonials: Testimonial[] = [
  {
    quote:
      "I'd been through four providers before this one. What's different is they actually remembered what I told them the first week, and they kept turning up when things got hard. That's it. That's the whole thing.",
    name: "Sample quote",
    role: "Participant",
    location: "Penrith",
    accent: "sage",
  },
  {
    quote:
      "My son has never been comfortable with new people. They didn't rush him, they didn't talk over him, and six months on he's going out twice a week. I didn't think we'd get here.",
    name: "Sample quote",
    role: "Parent of a participant",
    location: "Dubbo",
    accent: "terracotta",
  },
  {
    quote:
      "As a support coordinator I refer to All About Recovery because they say yes to the hard ones and then they follow through. Their reporting is on time and their communication is honest, even when it's not good news.",
    name: "Sample quote",
    role: "Support Coordinator",
    location: "Tamworth",
    accent: "teal",
  },
  {
    quote:
      "They explained my plan in a way that finally made sense, then helped me ask for what I actually needed at review. I got more hours and I understood why.",
    name: "Sample quote",
    role: "Participant",
    location: "Penrith",
    accent: "terracotta",
  },
  {
    quote:
      "Coming out of custody I had nothing lined up. They had ID, a doctor and somewhere to sleep sorted before release. Nobody had ever done that for me before.",
    name: "Sample quote",
    role: "Participant",
    location: "Western Sydney",
    accent: "sage",
  },
  {
    quote:
      "The team treat me like a person having a hard time, not a diagnosis being managed. It sounds small. It isn't.",
    name: "Sample quote",
    role: "Participant",
    location: "Dubbo",
    accent: "teal",
  },
];
