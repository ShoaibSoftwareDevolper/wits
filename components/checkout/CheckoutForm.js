"use client";

export default function CheckoutForm({
  shippingMethod,
  setShippingMethod,
  paymentMethod,
  setPaymentMethod,
  onSubmit,
  isSubmitting,
  total,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <section>
        <h2 className="font-serif text-2xl font-medium text-[#1c1a17] mb-4">
          Contact Information
        </h2>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="you@domain.com"
              className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-medium text-[#1c1a17] mb-4">
          Shipping Address
        </h2>
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
                First Name
              </label>
              <input
                type="text"
                required
                className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                required
                className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
              Street Address
            </label>
            <input
              type="text"
              required
              placeholder="House number and street name"
              className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
              Apartment, suite, unit (optional)
            </label>
            <input
              type="text"
              className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
                City
              </label>
              <input
                type="text"
                required
                className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
                State / Province
              </label>
              <input
                type="text"
                required
                className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
                Postal Code
              </label>
              <input
                type="text"
                required
                className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
              Country / Region
            </label>
            <select
              defaultValue="US"
              className="w-full px-3.5 py-3 bg-white border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
            >
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="AE">United Arab Emirates</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="PK">Pakistan</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-medium text-[#1c1a17] mb-4">
          Delivery Method
        </h2>
        <div className="space-y-3">
          <label
            onClick={() => setShippingMethod("standard")}
            className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${
              shippingMethod === "standard"
                ? "border-[#1c1a17] bg-white shadow-xs"
                : "border-[#ede8e1] bg-white hover:border-[#dcd6cc]"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipping"
                checked={shippingMethod === "standard"}
                onChange={() => setShippingMethod("standard")}
                className="accent-[#1c1a17]"
              />
              <div>
                <p className="font-sans text-xs font-medium text-[#1c1a17]">
                  Complimentary Standard Shipping
                </p>
                <p className="font-sans text-[11px] text-[#736c64]">3-5 Business Days</p>
              </div>
            </div>
            <span className="font-sans text-xs font-semibold text-[#1c1a17]">FREE</span>
          </label>

          <label
            onClick={() => setShippingMethod("express")}
            className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${
              shippingMethod === "express"
                ? "border-[#1c1a17] bg-white shadow-xs"
                : "border-[#ede8e1] bg-white hover:border-[#dcd6cc]"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipping"
                checked={shippingMethod === "express"}
                onChange={() => setShippingMethod("express")}
                className="accent-[#1c1a17]"
              />
              <div>
                <p className="font-sans text-xs font-medium text-[#1c1a17]">
                  Priority Express Courier
                </p>
                <p className="font-sans text-[11px] text-[#736c64]">1-2 Business Days</p>
              </div>
            </div>
            <span className="font-sans text-xs font-semibold text-[#1c1a17]">$12.00</span>
          </label>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-medium text-[#1c1a17] mb-4">
          Payment Method
        </h2>
        <div className="space-y-3">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`flex-1 py-3 px-4 text-xs font-sans font-medium border rounded-lg transition-colors cursor-pointer ${
                paymentMethod === "card"
                  ? "border-[#1c1a17] bg-white text-[#1c1a17]"
                  : "border-[#ede8e1] bg-white text-[#736c64]"
              }`}
            >
              Credit / Debit Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("cod")}
              className={`flex-1 py-3 px-4 text-xs font-sans font-medium border rounded-lg transition-colors cursor-pointer ${
                paymentMethod === "cod"
                  ? "border-[#1c1a17] bg-white text-[#1c1a17]"
                  : "border-[#ede8e1] bg-white text-[#736c64]"
              }`}
            >
              Cash on Delivery
            </button>
          </div>

          {paymentMethod === "card" ? (
            <div className="p-4 bg-white border border-[#ede8e1] rounded-xl space-y-3">
              <div>
                <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="4000 1234 5678 9010"
                  className="w-full px-3.5 py-2.5 bg-[#fafafa] border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="MM / YY"
                    className="w-full px-3.5 py-2.5 bg-[#fafafa] border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-[#33302c] mb-1.5">
                    Security Code (CVC)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full px-3.5 py-2.5 bg-[#fafafa] border border-[#dcd6cc] rounded-lg text-sm font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17] transition-colors"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-white border border-[#ede8e1] rounded-xl text-xs font-sans text-[#736c64]">
              Payment will be collected upon parcel delivery at your specified address.
            </div>
          )}
        </div>
      </section>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1c1a17] text-white text-xs font-sans font-medium uppercase tracking-[0.2em] py-4 rounded-none hover:bg-black transition-all cursor-pointer disabled:opacity-60"
      >
        {isSubmitting ? "PROCESSING..." : `PLACE ORDER • $${total.toFixed(2)}`}
      </button>
    </form>
  );
}
