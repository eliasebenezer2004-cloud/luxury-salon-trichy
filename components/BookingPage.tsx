"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { value: "facial", label: "Aurelia Signature Facial — ₹4,500" },
  { value: "gold", label: "Gold Leaf Cell Awakening — ₹6,000" },
  { value: "keratin", label: "Botanical Keratin Realignment — ₹7,500" },
  { value: "pedicure", label: "Sandstone Mineral Pedicure — ₹2,800" },
];

const locations = ["Cantonment", "Thillai Nagar", "KK Nagar"];
const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "07:00 PM"];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function MiniCalendar({
  selected,
  onSelect,
}: {
  selected: Date | undefined;
  onSelect: (d: Date) => void;
}) {
  const today = useMemo(() => new Date(), []);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const isSelected = (d: number) =>
    selected?.getDate() === d &&
    selected?.getMonth() === month &&
    selected?.getFullYear() === year;

  const isPast = (d: number) => {
    const date = new Date(year, month, d);
    return date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
  };

  return (
    <div className="border border-[#E8E2D2] bg-[#FAF9F6] p-4">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => {
            if (month === 0) { setMonth(11); setYear((y) => y - 1); }
            else setMonth((m) => m - 1);
          }}
          className="font-sans text-xs text-[#6E6863] hover:text-[#3E3A37]"
        >
          ←
        </button>
        <span className="font-serif text-sm text-[#3E3A37]">
          {MONTHS[month]} {year}
        </span>
        <button
          onClick={() => {
            if (month === 11) { setMonth(0); setYear((y) => y + 1); }
            else setMonth((m) => m + 1);
          }}
          className="font-sans text-xs text-[#6E6863] hover:text-[#3E3A37]"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center font-sans text-[10px] text-[#6E6863]">
            {d}
          </div>
        ))}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {dates.map((d) => (
          <button
            key={d}
            disabled={isPast(d)}
            onClick={() => onSelect(new Date(year, month, d))}
            className={`h-8 w-8 text-center font-sans text-xs transition-colors ${
              isSelected(d)
                ? "bg-[#3E3A37] text-[#FAF9F6]"
                : isPast(d)
                  ? "cursor-not-allowed text-[#E8E2D2]"
                  : "text-[#3E3A37] hover:bg-[#F0EBE1]"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");

  const selectService = (val: string) => {
    setSelectedService(val);
    if (step === 1) setStep(2);
  };

  const selectLocation = (loc: string) => {
    setSelectedLocation(loc);
    if (step === 2) setStep(3);
  };

  const handleSubmit = () => {
    alert(
      `Booking confirmed!\n\nService: ${selectedService}\nLocation: ${selectedLocation}\nDate: ${selectedDate?.toLocaleDateString()}\nTime: ${selectedTime}`
    );
  };

  const ready = selectedService && selectedLocation && selectedDate && selectedTime;

  return (
    <main className="flex min-h-screen flex-col bg-[#FAF9F6] md:flex-row">
      {/* Column A: Visual Anchor */}
      <div className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-[#F0EBE1] md:min-h-screen md:w-1/2">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/models/incense-smoke-elevation.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 px-8 text-center">
          <h2 className="font-serif text-4xl leading-snug text-[#3E3A37] md:text-5xl">
            Reserve
            <br />
            Your
            <br />
            Session
          </h2>
        </div>
      </div>

      {/* Column B: Form Engine */}
      <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-16">
        <div className="mx-auto w-full max-w-xl space-y-12">
          {/* Step 1: Service */}
          <div
            className={`transition-opacity duration-500 ${
              step >= 1 ? "opacity-100" : "opacity-30"
            }`}
          >
            <label className="mb-4 block font-sans text-xs uppercase tracking-widest text-[#6E6863]">
              01. Select Ritual
            </label>
            <select
              value={selectedService}
              onChange={(e) => selectService(e.target.value)}
              className="w-full border border-[#E8E2D2] bg-[#FAF9F6] p-4 font-sans text-sm text-[#3E3A37] outline-none transition-colors focus:border-[#8A9A86]"
            >
              <option value="">Choose a treatment...</option>
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: Location */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                key="location"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <label className="block font-sans text-xs uppercase tracking-widest text-[#6E6863]">
                  02. Select Sanctuary Hub
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => selectLocation(loc)}
                      className={`border p-4 font-sans text-xs uppercase tracking-wider transition-colors ${
                        selectedLocation === loc
                          ? "border-[#8A9A86] bg-[#8A9A86]/5 text-[#3E3A37]"
                          : "border-[#E8E2D2] text-[#6E6863] hover:border-[#8A9A86]"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 3: Date & Time */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                key="datetime"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <label className="block font-sans text-xs uppercase tracking-widest text-[#6E6863]">
                  03. Date & Available Slots
                </label>
                <div className="flex flex-col items-start gap-8 lg:flex-row">
                  <MiniCalendar
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                  />
                  {selectedDate && (
                    <div className="grid w-full grid-cols-2 gap-3 lg:w-auto">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`border px-6 py-3 font-sans text-xs transition-all ${
                            selectedTime === time
                              ? "border-[#3E3A37] bg-[#3E3A37] text-[#FAF9F6]"
                              : "border-[#E8E2D2] text-[#3E3A37] hover:border-[#8A9A86]"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <AnimatePresence>
            {ready && (
              <motion.button
                key="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleSubmit}
                className="w-full bg-[#3E3A37] py-5 font-sans text-xs uppercase tracking-[0.2em] text-[#FAF9F6] transition-colors duration-500 hover:bg-[#8A9A86]"
              >
                Confirm Sanctuary Booking
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
