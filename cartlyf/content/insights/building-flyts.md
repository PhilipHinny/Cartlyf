---
title: "Building FLYTS: payments, trust and compliance in a car rental marketplace"
slug: building-flyts
date: 2026-10-02
excerpt: "What we learned building a car rental marketplace for Kenya, from escrow payments and KYC to Google Play reviews and the Data Protection Act."
tags: [Case study, Payments, Data protection]
author: Jamal Jonan Agaba
---

FLYTS is our car rental marketplace for Kenya. It connects people who need a car, with or without a driver, to vehicles they can trust. It is live on the web at flytsapp.com and on Android.

Building it taught us most of what we now do for clients. A rental marketplace has to move money safely between strangers, check that people are who they say they are, and protect a lot of personal data. Here is how we approached each of those, and what we would tell anyone building something similar.

## Payments: holding money until the job is done

A renter pays before the trip, but the vehicle provider should only be paid once the rental goes as agreed. That means the platform has to hold funds in between: escrow.

We integrated **Paystack** for card and escrow-style flows alongside **M-Pesa**, because in Kenya a payment option without M-Pesa is barely a payment option at all. Payouts to vehicle providers are handled manually for now while volumes are small, which keeps a person in the loop on every transaction.

Planning for growth across East Africa raised a harder question: which gateway works well across borders, including payouts? Paystack's payout limits on its entry tier pushed us to look at **Flutterwave** as a regional option. The lesson for any business planning to cross borders: check payout rules and limits in every country before you commit, not just whether customers can pay.

## Trust: knowing who is behind the wheel

Handing a car to a stranger is a trust problem before it is a technology problem. Our answer combines software and people:

- **Renter KYC.** Renters are verified before they can book, and our team physically checks their identity.
- **Vehicle inspection.** Listed vehicles are inspected before they go live.
- **With-driver and self-drive options**, so providers can choose how much risk they take on.

Fully automated verification is tempting, but at an early stage a human check catches problems software misses and builds confidence on both sides.

## Compliance: treating data protection as part of the build

FLYTS holds names, ID details, phone numbers, payment records and trip locations. Under Kenya's Data Protection Act that needs care from day one, not after launch. We prepared:

- a **privacy policy** written for renters and providers, not lawyers;
- a **data protection impact assessment (DPIA)** covering the riskier processing, such as identity checks and location data;
- a clear **description of our processing**: what we collect, why, and who sees it.

Doing this early made other things easier. When Google Play asked for a **data deletion link** as part of its policy review, we already knew exactly what data we held and how deletion should work.

## Shipping to Google Play

Getting an app approved is its own project. Along the way we worked through closed testing, built production releases with Expo's build service, resolved policy findings, and moved to an organisation developer account, which requires a D-U-N-S number for the business. None of it is difficult on its own, but together it takes weeks. Plan for that time in any launch.

## What the market taught us

Our first plan was to list cars from individual owners. When we approached owners, many turned out to be brokers rather than owners, and few were ready to list. So we shifted toward **existing rental companies and fleet operators**. They already manage their own risk, and FLYTS brings them customers.

That conversation with the market is the most valuable part of building a product. It is also why we now start every client project by testing assumptions with real users before writing much code.

## What we bring from FLYTS to client work

- Payment flows that combine M-Pesa and card gateways, with escrow and payouts.
- KYC and onboarding that mixes automated and human checks.
- Data protection built into the system from the start.
- Experience getting apps through store review.
- A habit of letting real users change the plan early.

---

**Building something that handles money or customer data?** Book a free 30-minute health check and we'll share what we've learned.
