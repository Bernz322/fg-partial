---
name: 💡 Feature Request
about: Create a new ticket for a new feature request
title: "[💡 FEAT] : <title>"
labels: "feature-request"
assignees: "Bernz322"
---

## **Owner**

@Bernz322

## **Description**

As a **_website user_**
I want to **_be able to cancel my booking_**
So that **_the website owners can consider my options and update my booking entry_**

## **Screenshots**

_Please provide screenshots for UI related stories._

## **Acceptance Criteria**

### **Scenario 1**

User is a premium member

**Given** I am a premium member,
**When** I cancel under 24 hours,
**Then** I incur no penalty.

---

### **Scenario 2**

User is a typical member

**Given** I am a non-premium member,
**When** I cancel less that 24 hours in advance,
**Then** I pay 50% fee.

---

### **Scenario 3**

Email confirmation

**Given** I am a site member,
**When** I cancel my reservation,
**Then** I am emailed a confirmation.

---

### **NOTE**

> You can have multiple scenario as many as you want. As long as it is relevant to the goal of the user story.

For more information on how to create a **user story**, see the following:

- [Style-guides and template for a user story](https://github.com/AlphaFounders/style-guide/blob/master/agile-user-story.md)
- [“Advantages of the “As a user, I want” user story template.”](http://www.mountaingoatsoftware.com/blog/advantages-of-the-as-a-user-i-want-user-story-template)
- [Scrum guide](http://scrumguides.org/scrum-guide.html)
