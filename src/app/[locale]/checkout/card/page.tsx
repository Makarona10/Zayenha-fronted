"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching clientSecret (replace with actual backend call)
    setTimeout(() => {
      setClientSecret("mock_client_secret_123");
    }, 2000);
  }, []);

  if (!clientSecret) {
    return <PaymentFormSkeleton />;
  }

  return (
    <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-3xl font-bold text-primary-700 mb-6">Checkout</h1>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-lg mx-auto">
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

function PaymentFormSkeleton() {
  return (
    <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 animate-pulse">
      <h1 className="text-3xl font-bold text-primary-700 mb-6">Checkout</h1>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-lg mx-auto space-y-6">
        <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
        <div className="h-14 bg-gray-200 rounded-lg"></div>
        <div className="h-14 bg-gray-200 rounded-lg"></div>
        <div className="h-12 bg-primary-200 rounded-lg"></div>
      </div>
    </div>
  );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    // Replace with actual clientSecret
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      "mock_client_secret_123",
      {
        payment_method: { card: cardElement },
      },
    );

    setLoading(false);

    if (error) {
      setErrorMessage(error.message || "Payment failed.");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setSuccessMessage("Payment successful! Thank you for your order.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border border-gray-200 rounded-xl focus-within:border-primary-400 transition">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
                "::placeholder": { color: "#a0aec0" },
              },
              invalid: { color: "#fa755a" },
            },
          }}
        />
      </div>

      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-600 text-sm font-medium">{successMessage}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-xl shadow-md transition"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
