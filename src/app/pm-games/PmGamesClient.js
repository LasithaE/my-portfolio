"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const COLORS = {
  ink: "#1A1A18",
  muted: "#8C8880",
  accent: "#5C6B4A",
  red: "#C0392B",
};

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => (word.length ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}

const WHAT_IF_COMPANIES = [
  "Cred", "Razorpay", "Zepto", "PhonePe", "Swiggy", "Meesho", "Groww", "Urban Company",
  "Nykaa", "Lenskart", "Slice", "Jupiter", "Jar", "Khatabook", "Ola", "Zomato", "Rapido",
  "ShareChat", "Pocket FM", "Zerodha", "Classplus", "Unacademy", "Juspay", "Setu", "Fi Money",
  "Niyo", "Freo", "Wakefit", "Licious", "Country Delight", "Dunzo", "Blinkit", "Ather",
  "Rebel Foods", "Cure.fit", "Doubtnut", "Vedantu", "Spinny", "Cars24", "Delhivery",
];

const WHAT_IF_VERTICALS = [
  "quick commerce", "wealth management", "social commerce", "creator monetization", "B2B SaaS",
  "health insurance", "vernacular media", "fashion marketplace", "gig economy platform", "edtech",
  "travel booking", "gaming", "subscription box", "local services marketplace", "EV fleet",
  "telemedicine", "SME lending", "agritech", "proptech", "corporate expense management",
  "loyalty & rewards", "BNPL", "co-living", "pet care", "wedding tech",
];

const GROWTH_SIGNAL_COMPANIES = [
  "PhonePe", "Zepto", "Swiggy", "CRED", "Groww", "Meesho", "Razorpay", "Nykaa", "Ola Electric",
  "Zomato", "Slice", "Jupiter", "Urban Company", "Rapido", "ShareChat", "Classplus", "Pocket FM",
  "Jar", "Zerodha", "Fi Money", "Niyo", "Juspay", "Country Delight", "Licious", "Wakefit",
  "Blinkit", "Ather", "Cars24", "Spinny", "Rebel Foods", "Cure.fit", "Delhivery", "Dunzo",
  "Doubtnut", "Vedantu",
];

const GROWTH_SIGNALS = [
  "D30 retention drop", "activation rate declining post-onboarding", "free-to-paid conversion stalling",
  "referral loop breaking down", "session frequency dropping", "feature adoption bottleneck",
  "onboarding completion rate falling", "repeat purchase rate declining", "cart abandonment spike",
  "search-to-purchase drop", "paywall conversion stalling", "supply-side churn on marketplace",
  "NPS drop post-rebrand", "UPI market share jump", "CAC spike with flat growth",
  "paid CAC outperforming referral CAC", "tier-2 growth outpacing metros", "checkout conversion dip",
  "AOV compression", "MAU flattening despite high installs", "merchant churn uptick",
  "push notification CTR falling", "app uninstall surge post-update", "cross-sell attach rate declining",
  "reactivation campaign underperforming", "new user cohort LTV dropping", "power user share shrinking",
  "support ticket surge around a specific flow", "subscription cancellation spike",
  "day-1 drop-off increasing",
];

const EVAL_USE_CASES = [
  "healthcare intake agent", "customer support voice bot", "loan application assistant",
  "vernacular language tutor", "insurance claim triage", "food ordering voice agent",
  "KYC document extraction", "sales call summarization", "multilingual FAQ bot",
  "HR onboarding assistant", "fraud detection pipeline", "product image recognition for cataloging",
  "meeting note generation", "real-time translation for support calls", "invoice processing agent",
  "legal document review", "credit underwriting from bank statements",
  "social media content moderation", "debt collection voice agent", "field sales coaching bot",
];

const EVAL_PROVIDER_TYPES = [
  "voice AI providers (STT + TTS)", "LLM providers (latency vs accuracy)", "RAG pipeline stacks",
  "OCR + document AI providers", "vision model providers", "agentic framework options",
  "vector DB options", "speech-to-text providers", "multilingual NLP models",
  "open-source vs closed models", "fine-tuning vs prompt engineering", "on-device vs cloud inference",
  "real-time vs batch processing pipelines", "observability and eval tooling", "guardrails and safety layers",
];

const GAMES = [
  {
    id: "what-if",
    number: "01",
    title: "What If",
    formula: "[Company] × [Vertical]",
    description: "Pick a company and a vertical it hasn't touched yet.",
    slot1: { label: "Company", values: WHAT_IF_COMPANIES },
    slot2: { label: "Vertical", values: WHAT_IF_VERTICALS.map(titleCase) },
    compose: (company, vertical) => [
      { text: "What if " },
      { text: company, variable: true },
      { text: " built a " },
      { text: vertical, variable: true },
      { text: " product?" },
    ],
  },
  {
    id: "growth-signal",
    number: "02",
    title: "Growth Signal",
    formula: "[Company] × [Signal]",
    description: "Pick a company and a growth metric moving somewhere.",
    slot1: { label: "Company", values: GROWTH_SIGNAL_COMPANIES },
    slot2: { label: "Signal", values: GROWTH_SIGNALS.map(titleCase) },
    compose: (company, signal) => [
      { text: "What's driving " },
      { text: signal, variable: true },
      { text: " at " },
      { text: company, variable: true },
      { text: "?" },
    ],
  },
  {
    id: "eval-this",
    number: "03",
    title: "Eval This",
    formula: "[Use Case] × [Provider Type]",
    description: "Pick a use case and a category of provider to evaluate it against.",
    slot1: { label: "Use Case", values: EVAL_USE_CASES.map(titleCase) },
    slot2: { label: "Provider Type", values: EVAL_PROVIDER_TYPES.map(titleCase) },
    compose: (useCase, providerType) => [
      { text: "How would you evaluate " },
      { text: providerType, variable: true },
      { text: " for a " },
      { text: useCase, variable: true },
      { text: "?" },
    ],
  },
];

function spinColumn({ values, targetIndex, duration, onTick, onLock }) {
  const start = performance.now();
  let timeoutId;

  function tick() {
    const elapsed = performance.now() - start;
    const t = Math.min(elapsed / duration, 1);

    if (t >= 1) {
      onLock(values[targetIndex]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * values.length);
    onTick(values[randomIndex]);

    // Fast and blurred for most of the spin, dramatic slowdown near the end.
    const eased = Math.pow(t, 4);
    const delay = 50 + (400 - 50) * eased;
    timeoutId = setTimeout(tick, delay);
  }

  tick();
  return () => clearTimeout(timeoutId);
}

const dmMonoStyle = { fontFamily: "var(--font-dm-mono)" };
const garamondBoldStyle = { fontFamily: "var(--font-eb-garamond-bold)", fontWeight: 700 };

function GameCard({ game, selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className={`text-left flex flex-col gap-2 border shadow-md rounded-xl p-5 bg-white transition-colors ${
        selected ? "border-2" : "border border-gray-300 hover:border-gray-400"
      }`}
      style={selected ? { borderColor: COLORS.accent } : undefined}
    >
      <p
        className="text-[12px] tracking-[0.15em] uppercase"
        style={{ ...dmMonoStyle, color: selected ? COLORS.accent : COLORS.muted }}
      >
        {game.number}
      </p>
      <h3 className="text-[24px]" style={{ ...garamondBoldStyle, color: COLORS.ink }}>
        {game.title}
      </h3>
      <p className="text-[13px]" style={{ ...dmMonoStyle, color: COLORS.muted }}>
        {game.formula}
      </p>
      <p className="text-[14px] leading-snug text-[#364153]">{game.description}</p>
    </button>
  );
}

function SlotColumn({ label, value, locked }) {
  return (
    <div className="flex flex-col items-center w-[240px] md:w-[340px]">
      <p
        className="text-[12px] tracking-[0.15em] uppercase mb-2"
        style={{ ...dmMonoStyle, color: COLORS.muted }}
      >
        {label}
      </p>
      <div
        className={`w-full h-[150px] flex items-center justify-center overflow-hidden px-3 py-2 rounded-xl bg-white transition-shadow ${
          locked ? "border-2 shadow-md" : "border border-gray-300 shadow-sm"
        }`}
        style={locked ? { borderColor: COLORS.accent } : undefined}
      >
        <span
          className="text-center leading-tight transition-[filter] duration-200"
          style={{
            ...garamondBoldStyle,
            fontSize: 30,
            color: locked ? COLORS.red : COLORS.ink,
            filter: locked ? "blur(0px)" : "blur(3px)",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function PromptCard({ game, result }) {
  const segments = game.compose(result.slot1Value, result.slot2Value);
  return (
    <div className="mx-auto max-w-[680px] p-8 md:p-10 rounded-xl border border-gray-300 shadow-md bg-white">
      <p className="text-center" style={{ ...garamondBoldStyle, fontSize: 38, lineHeight: 1.45, color: COLORS.ink }}>
        {segments.map((seg, i) => (
          <span key={i} style={seg.variable ? { color: COLORS.red } : undefined}>
            {seg.text}
          </span>
        ))}
      </p>
    </div>
  );
}

function PrimaryButton({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`group flex items-center gap-1.5 rounded-full text-[14px] font-semibold px-5 py-2.5 transition-colors ${
        disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-gray-900 text-white hover:bg-gray-800"
      }`}
    >
      {children}
      <ArrowUpRight size={16} className="-rotate-0 group-hover:rotate-45 transition-transform" />
    </button>
  );
}

function SecondaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-gray-300 text-gray-700 text-[14px] font-semibold px-5 py-2.5 hover:bg-gray-100 transition-colors"
    >
      {children}
    </button>
  );
}

export default function PmGamesClient() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [phase, setPhase] = useState("select"); // select | spinning | result
  const [slot1Display, setSlot1Display] = useState("");
  const [slot2Display, setSlot2Display] = useState("");
  const [slot1Locked, setSlot1Locked] = useState(false);
  const [slot2Locked, setSlot2Locked] = useState(false);
  const [result, setResult] = useState(null);

  const cancelFns = useRef([]);
  const spinToken = useRef(0);

  const selectedGame = GAMES.find((g) => g.id === selectedGameId) || null;

  const stopSpins = useCallback(() => {
    cancelFns.current.forEach((cancel) => cancel());
    cancelFns.current = [];
  }, []);

  useEffect(() => stopSpins, [stopSpins]);

  function startSpin(game) {
    stopSpins();
    const token = ++spinToken.current;
    setPhase("spinning");
    setSlot1Locked(false);
    setSlot2Locked(false);
    setResult(null);

    const t1 = Math.floor(Math.random() * game.slot1.values.length);
    const t2 = Math.floor(Math.random() * game.slot2.values.length);

    const cancel1 = spinColumn({
      values: game.slot1.values,
      targetIndex: t1,
      duration: 8000,
      onTick: (v) => spinToken.current === token && setSlot1Display(v),
      onLock: (v) => {
        if (spinToken.current !== token) return;
        setSlot1Display(v);
        setSlot1Locked(true);
      },
    });

    const cancel2 = spinColumn({
      values: game.slot2.values,
      targetIndex: t2,
      duration: 9600,
      onTick: (v) => spinToken.current === token && setSlot2Display(v),
      onLock: (v) => {
        if (spinToken.current !== token) return;
        setSlot2Display(v);
        setSlot2Locked(true);
        setResult({ slot1Value: game.slot1.values[t1], slot2Value: game.slot2.values[t2] });
        setPhase("result");
      },
    });

    cancelFns.current = [cancel1, cancel2];
  }

  function handleSelectGame(id) {
    if (phase !== "select") return;
    setSelectedGameId(id);
  }

  function handlePlay() {
    if (!selectedGame) return;
    startSpin(selectedGame);
  }

  function handleReroll() {
    if (!selectedGame) return;
    startSpin(selectedGame);
  }

  function handleSwitchGame() {
    stopSpins();
    setPhase("select");
    setSelectedGameId(null);
    setResult(null);
    setSlot1Locked(false);
    setSlot2Locked(false);
  }

  return (
    <div className="polka-dot min-h-screen">
      <div className="max-w-[820px] mx-auto px-6 pt-16 pb-24">
        <header className="mb-12 text-center">
          <h1 className="text-[36px] md:text-[46px]" style={{ ...garamondBoldStyle, color: COLORS.ink }}>
            Spin A Prompt
          </h1>
          <p className="mt-3 text-[16px] md:whitespace-nowrap text-[#364153]">
            Three games. Two slots each. Land on a prompt you didn&apos;t pick yourself.
          </p>
        </header>

        {phase === "select" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {GAMES.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  selected={selectedGameId === game.id}
                  onSelect={() => handleSelectGame(game.id)}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <PrimaryButton disabled={!selectedGame} onClick={handlePlay}>
                Let&apos;s play
              </PrimaryButton>
            </div>
          </>
        )}

        {phase === "spinning" && selectedGame && (
          <div>
            <p
              className="text-center text-[13px] tracking-[0.15em] uppercase mb-8"
              style={{ ...dmMonoStyle, color: COLORS.muted }}
            >
              Game {selectedGame.number} — {selectedGame.title}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <SlotColumn label={selectedGame.slot1.label} value={slot1Display} locked={slot1Locked} />
              <SlotColumn label={selectedGame.slot2.label} value={slot2Display} locked={slot2Locked} />
            </div>

            <div className="flex justify-center gap-3 mt-8">
              <SecondaryButton onClick={handleSwitchGame}>Switch game</SecondaryButton>
            </div>
          </div>
        )}

        {phase === "result" && selectedGame && result && (
          <div>
            <PromptCard game={selectedGame} result={result} />

            <div className="flex justify-center gap-3 mt-8">
              <PrimaryButton onClick={handleReroll}>Reroll</PrimaryButton>
              <SecondaryButton onClick={handleSwitchGame}>Switch game</SecondaryButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
