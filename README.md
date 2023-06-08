
# QA Automation (Cypress) Developer Test


Create automated Cypress tests for Dice on CSGORoll:

    1.  Bet +1 / +10 / 1/2 / X2 buttons work as expected
    2.  Roll under/over switch changes value
    3.  Dragging slider updates values inside inputs
    4.  Updating inputs makes other inputs update
    5.  Updating Rolls count in Spray mode updates button text
    6.  Intercept the bet list request (https://api-staging.csgoroll.com/graphql?operationName=DiceBets) and mock the response to have an empty list of bets. After that ensure that the list is not showing any bet.


# Deliverables

https://recordit.co/4Wy73DCyj1

