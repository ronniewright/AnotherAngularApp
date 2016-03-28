Feature: Add new Items

  As a user
  I would like to be able to add additional items to my to do list

  @watch
  Scenario: ability to add a new item to the list
    Given I am viewing my to do list
    When I populate the newItem field with "New Item To Do"
    And I click the addNewItem button
    Then "New Item To Do" is added to the list

