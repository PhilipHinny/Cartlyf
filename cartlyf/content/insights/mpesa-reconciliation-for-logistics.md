---
title: "Why your M-Pesa payments don't match, and how to fix it"
slug: mpesa-reconciliation-for-logistics
date: 2026-10-02
excerpt: "Unmatched M-Pesa payments cost logistics firms hours every week. Here are the usual causes and the system design that removes most of them."
tags: [Payments, Logistics]
author: Jamal Jonan Agaba
---

Ask anyone in a transport or freight office about M-Pesa and you'll hear the same story. Money arrives, but nobody can tell which invoice it was for. Someone spends the afternoon scrolling statements, calling customers and updating a spreadsheet. By month-end, a handful of payments still sit in "unknown".

This is reconciliation: matching every payment received to the invoice, booking or account it was meant for. When it fails, the cost shows up as staff time, delayed cargo releases, disputes with customers, and books that never quite close.

## The usual causes

**Wrong or missing account numbers.** On a Paybill, customers type the account number themselves. A typo, a spare space, or the customer's own name instead of the invoice number, and the payment no longer points anywhere useful.

**Till payments with no reference at all.** Buy Goods Till numbers don't carry an account reference. If several customers pay similar amounts on the same day, telling them apart is guesswork.

**Payments from someone else's phone.** A driver, clerk or relative pays on the customer's behalf. The name on the M-Pesa message doesn't match anyone in your records.

**Part payments and combined payments.** One customer pays half now and half later. Another pays three invoices in one transaction. Neither matches an invoice amount exactly.

**Lost confirmations.** When payments are pushed to customers' phones (STK push), the confirmation from Safaricom can be delayed or missed if your system was offline or timed out. The customer has paid; your system thinks they haven't.

**Reversals and charges.** A reversed transaction or a fee difference leaves a small mismatch that someone has to explain.

## The fix is in the design

You can't train every customer to type perfectly. You can design the payment flow so that their typing matters less.

**1. One unique reference per invoice.** Generate a short, unique payment reference for every invoice or booking and print it everywhere: on the invoice, in the SMS, on the receipt. The Kenya International Freight and Warehousing Association is moving its members' payments to exactly this model, issuing [invoices with unique payment references](https://capitalfm.africa/capitalpay-kifwa-in-deal-to-digitise-freight-payments/) so each payment can be matched to the right member and charge.

**2. Validate before you accept.** Safaricom's Daraja API lets your system check a Paybill account number at the moment of payment. If the reference doesn't exist, the payment can be rejected before money moves, instead of becoming a mystery afterwards.

**3. Push the payment request instead of asking customers to type.** With STK push, your system sends the payment prompt to the customer's phone with the amount and reference already filled in. The customer only enters their PIN.

**4. Store the M-Pesa transaction code every time.** The transaction code is the key that ties your record to Safaricom's. Keep it with the invoice, along with the payer's number and the time.

**5. Reconcile against the statement daily.** Confirmations can still go missing. A daily automatic comparison between your records and the M-Pesa statement catches anything your system didn't hear about in real time.

**6. Send exceptions to a queue, not a spreadsheet.** Part payments, overpayments and unknown payers go into a short list with suggested matches, so a person only handles the few cases that genuinely need judgement.

## What changes when it works

Finance stops spending afternoons on statements. Customers get receipts the moment they pay. Cargo and vehicles are released faster because payment status is never in doubt. And month-end closes on time.

None of this requires replacing your whole system. In most businesses it means adding a payment layer between M-Pesa and the tools you already use.

---

**Losing hours to unmatched payments?** Book a free 30-minute health check and we'll trace where your reconciliation breaks and what it would take to fix.
