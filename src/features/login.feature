Feature: Featuring login

    Feature Description

    # Background: Login page
    Scenario: Login Page
        Given I am on the login page

    Scenario Outline: Login with a My Vodafone  user
        When I Login in with My Vodafone "<user>" and "<password>"
        #     Then I shall be on My Vodafone Welcome Page
        Examples:
            | user        | password |
            | wdio@grr.la | password |

