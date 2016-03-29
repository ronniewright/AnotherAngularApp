Feature: Add new Items

  As a user
  I would like to be able to add additional items to my to do list

  @addItem
  Scenario: ability to add a new item to the list
    Given I am viewing my to do list
    When I populate the New Item field with "New Item To Do"
    And I click the Add New Item button
    Then "New Item To Do" is added to the list

