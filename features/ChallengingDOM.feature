@test
Feature: Challenging DOM

  Scenario: 1. Column names
    Given I navigate to challenging_dom page
    Then Table names should be
      | columnNames |
      | Lorem       |
      | Ipsum       |
      | Dolor       |
      | Sit         |
      | Amet        |
      | Diceret     |
      | Action      |

  Scenario: 2. Diceret column should be incremented
    Given I navigate to challenging_dom page
    Then all enteries in Diceret colum should be incremented
