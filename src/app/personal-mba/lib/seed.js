function mkId() {
  return Math.random().toString(36).substring(2, 9) + Math.random().toString(36).substring(2, 9)
}

const NOW = '2026-01-01T00:00:00.000Z'

function book(title, author, row, weekNumber, subject, expectsCaseStudy) {
  return {
    id: mkId(), title, author,
    mediaType: 'book', subject, row, weekNumber,
    isCaseStudy: false, expectsCaseStudy,
    status: 'not-started', progress: null, rating: null,
    dateStarted: null, dateCompleted: null,
    review: '', takeaways: [], frameworks: [], url: null,
    createdAt: NOW, updatedAt: NOW,
  }
}

function media(title, author, mediaType, row, weekNumber, subject, expectsCaseStudy) {
  return {
    id: mkId(), title, author,
    mediaType, subject, row, weekNumber,
    isCaseStudy: false, expectsCaseStudy,
    status: 'not-started', progress: null, rating: null,
    dateStarted: null, dateCompleted: null,
    review: '', takeaways: [], frameworks: [], url: null,
    createdAt: NOW, updatedAt: NOW,
  }
}

function caseStudy(title, subtitle, row, weekNumber, subject) {
  return {
    id: mkId(), title, author: subtitle,
    mediaType: 'case-study', subject, row, weekNumber,
    isCaseStudy: true, expectsCaseStudy: true,
    status: 'not-started', progress: null, rating: null,
    dateStarted: null, dateCompleted: null,
    review: '', takeaways: [], frameworks: [], url: null,
    createdAt: NOW, updatedAt: NOW,
  }
}

export function buildSeedResources() {
  return [
    // ── Week 1 — Headspace ────────────────────────────────────────────────────
    book('Becoming Supernatural',    'Joe Dispenza',           'week-1', 1, ['Headspace'], false),
    book('Autobiography of a Yogi',  'Paramahansa Yogananda',  'week-1', 1, ['Headspace'], false),
    book('A New Earth',              'Eckhart Tolle',           'week-1', 1, ['Headspace'], false),
    book('Beyond Belief',            '',                        'week-1', 1, ['Headspace'], false),
    book('Beyond Good and Evil',     'Friedrich Nietzsche',     'week-1', 1, ['Headspace'], false),

    // ── Week 2 — Numbers, Statistics & Excel ─────────────────────────────────
    book('Psychology of Money',        'Morgan Housel',   'week-2', 2, ['Numbers', 'Statistics'], false),
    book('Naked Statistics',           'Charles Wheelan', 'week-2', 2, ['Statistics'], false),
    book('How to Lie with Statistics', 'Darrell Huff',    'week-2', 2, ['Statistics'], false),
    media('StatQuest with Josh Starmer',    'Josh Starmer',    'youtube', 'week-2', 2, ['Statistics'], false),
    media('3Blue1Brown',                    '3Blue1Brown',     'youtube', 'week-2', 2, ['Mathematics'], false),
    media('Leila Gharani — Sheets & Excel', 'Leila Gharani',  'youtube', 'week-2', 2, ['Excel'], false),
    media('Accounting Stuff',               'Accounting Stuff','youtube', 'week-2', 2, ['Accounting'], false),

    // ── Week 3 — Marketing ───────────────────────────────────────────────────
    book('This is Marketing',     'Seth Godin',    'week-3', 3, ['Marketing'], true),
    book('Building a StoryBrand', 'Donald Miller', 'week-3', 3, ['Marketing'], true),
    media('Marketing Examples by Harry Dry', 'Harry Dry',    'youtube', 'week-3', 3, ['Marketing'], true),
    media('Marketing Against the Grain',     'Kipp & Kieran','podcast', 'week-3', 3, ['Marketing'], true),
    caseStudy('Blue Bottle Coffee', 'Premium Positioning in a Commodity Market', 'week-3', 3, ['Marketing', 'Strategy']),

    // ── Week 4 — Strategy ────────────────────────────────────────────────────
    book('Good Strategy Bad Strategy', 'Richard Rumelt',  'week-4', 4, ['Strategy'], true),
    book('Blue Ocean Strategy',        'Kim & Mauborgne', 'week-4', 4, ['Strategy'], true),
    caseStudy('Southwest Airlines', 'Low Cost Strategy & Trade-offs', 'week-4', 4, ['Strategy']),

    // ── Week 5 — Entrepreneurship I ──────────────────────────────────────────
    book('The Personal MBA', 'Josh Kaufman',  'week-5', 5, ['Entrepreneurship'], true),
    book('Zero to One',      'Peter Thiel',   'week-5', 5, ['Entrepreneurship', 'Strategy'], true),
    book('$100M Offers',     'Alex Hormozi',  'week-5', 5, ['Entrepreneurship', 'Marketing'], true),
    media('Y Combinator Startup School', 'Y Combinator', 'youtube', 'week-5', 5, ['Entrepreneurship'], true),
    caseStudy('Airbnb', 'Founding Story & Early Growth Hacks', 'week-5', 5, ['Entrepreneurship', 'Marketing']),

    // ── Week 6 — Entrepreneurship II ─────────────────────────────────────────
    book('Shoe Dog', 'Phil Knight', 'week-6', 6, ['Entrepreneurship'], true),
    media('How I Built This', 'Guy Raz',     'podcast', 'week-6', 6, ['Entrepreneurship'], true),
    media('Acquired Podcast', 'Ben & David', 'podcast', 'week-6', 6, ['Entrepreneurship', 'Strategy'], true),
    caseStudy('Patagonia', 'Worn Wear & Anti-Growth Marketing', 'week-6', 6, ['Marketing', 'Strategy']),

    // ── Week 7 — Finance ─────────────────────────────────────────────────────
    book('Profit First',             'Mike Michalowicz', 'week-7', 7, ['Finance'], true),
    book('The Intelligent Investor', 'Benjamin Graham',  'week-7', 7, ['Finance', 'Investing'], true),
    media('Accounting Stuff',               'Accounting Stuff','youtube', 'week-7', 7, ['Accounting'], true),
    media('Leila Gharani — Sheets & Excel', 'Leila Gharani',  'youtube', 'week-7', 7, ['Excel', 'Finance'], true),
    caseStudy('Warby Parker', 'Unit Economics of D2C', 'week-7', 7, ['Finance', 'Entrepreneurship']),

    // ── Week 8 — Operations ──────────────────────────────────────────────────
    book('The Goal',      'Eliyahu Goldratt', 'week-8', 8, ['Operations'], true),
    book('Atomic Habits', 'James Clear',      'week-8', 8, ['Operations', 'Psychology'], true),
    caseStudy('Zomato & Swiggy', 'Indian Food Delivery Ops Model', 'week-8', 8, ['Operations']),

    // ── Week 9 — Leadership & Data ───────────────────────────────────────────
    book('Thinking Fast and Slow', 'Daniel Kahneman', 'week-9', 9, ['Psychology', 'Leadership'], true),
    book('Extreme Ownership',      'Jocko Willink',   'week-9', 9, ['Leadership'], true),
    book('AI Superpowers',         'Kai-Fu Lee',      'week-9', 9, ['Technology', 'Strategy'], true),
    media('Dare to Lead', 'Brené Brown', 'podcast', 'week-9', 9, ['Leadership'], true),
    caseStudy('Satya Nadella', 'Microsoft Culture Turnaround', 'week-9', 9, ['Leadership']),

    // ── Week 10 — Purpose of the Firm ────────────────────────────────────────
    book('Let My People Go Surfing', 'Yvon Chouinard', 'week-10', 10, ['Strategy', 'Leadership'], true),
    caseStudy('Amul', 'Cooperative Model & Purpose-Driven Growth', 'week-10', 10, ['Strategy']),

    // ── Week 11 — Consumer Psychology & Behaviour ────────────────────────────
    book('Predictably Irrational', 'Dan Ariely',      'week-11', 11, ['Psychology'], true),
    book('Influence',              'Robert Cialdini', 'week-11', 11, ['Psychology', 'Marketing'], true),
    book('Hooked',                 'Nir Eyal',        'week-11', 11, ['Psychology', 'Product'], true),
    caseStudy('Mamaearth', 'D2C Brand Building in India',         'week-11', 11, ['Marketing', 'Entrepreneurship']),
    caseStudy('mCaffeine', 'Caffeinated Skincare & D2C Playbook', 'week-11', 11, ['Marketing', 'Entrepreneurship']),

    // ── Week 12 — Brand Dissections ──────────────────────────────────────────
    media('The Futur with Chris Do', 'Chris Do', 'podcast', 'week-12', 12, ['Branding', 'Design'], true),
    caseStudy('Glossier',    'Community-Led Beauty Brand',           'week-12', 12, ['Branding', 'Marketing']),
    caseStudy('Oatly',       'Oat Milk & Activist Brand Strategy',   'week-12', 12, ['Branding', 'Marketing']),
    caseStudy('Chipotle',    'Fast Casual & Transparency Marketing', 'week-12', 12, ['Branding', 'Marketing']),
    caseStudy('Blue Tokai',  'Specialty Coffee in India',            'week-12', 12, ['Branding']),
    caseStudy('Subko',       'Third Wave Coffee Brand Building',     'week-12', 12, ['Branding']),
    caseStudy('Rage Coffee', 'D2C Coffee & Personal Brand',          'week-12', 12, ['Branding', 'Entrepreneurship']),

    // ── Week 13 — India Lens ─────────────────────────────────────────────────
    book('An Uncertain Glory', 'Amartya Sen & Jean Drèze', 'week-13', 13, ['India', 'Economics'], false),
    book("India's Turn",       'Mihir Sharma',              'week-13', 13, ['India', 'Economics'], false),
    book('The Flipkart Story', 'Mihir Dalal',               'week-13', 13, ['India', 'Entrepreneurship'], false),
    media('The Seen and the Unseen', 'Amit Varma',           'podcast', 'week-13', 13, ['India', 'Economics'], false),
    media('Ideas of India',          'Shruti Rajagopalan',   'podcast', 'week-13', 13, ['India', 'Policy'], false),
    media('Neon Show',               'Siddharth Ahluwalia',  'podcast', 'week-13', 13, ['India', 'Entrepreneurship'], false),

    // ── Anytime — Performance & People ───────────────────────────────────────
    book("The Champion's Mind",          'Jim Afremow',   'anytime', null, ['Performance'], false),
    book('Rafa',                          'Rafael Nadal',  'anytime', null, ['Performance'], false),
    book('Never Eat Alone',               'Keith Ferrazzi','anytime', null, ['Networking'], false),
    book('High Output Management',        'Andy Grove',    'anytime', null, ['Leadership', 'Management'], false),
    book('The Hard Thing About Hard Things','Ben Horowitz','anytime', null, ['Leadership', 'Entrepreneurship'], false),
    book('No Rules Rules',                'Reed Hastings', 'anytime', null, ['Leadership', 'Culture'], false),
  ]
}
