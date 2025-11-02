"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentStatus() {
  const params = useSearchParams();
  const [message, setMessage] = useState("Verifying payment...");

  useEffect(() => {
    const verifyPayment = async () => {
      const txStatus = params.get("txStatus");
      const booking_id = params.get("booking_id");

      if (txStatus === "SUCCESS") {
        await fetch("/api/update-payment-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            booking_id,
            status: "paid",
          }),
        });
        setMessage("✅ Payment successful! Your booking is confirmed.");
      } else {
        setMessage("❌ Payment failed. Please try again.");
      }
    };

    verifyPayment();
  }, [params]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1>{message}</h1>
    </div>
  );
}
