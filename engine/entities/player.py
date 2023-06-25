from typing import List
from .card import Card
from .unit import Unit


class Player:
    def __init__(self, login: str, name: str):
        self._active = False
        self._login = login
        self._name = name
        self._cards = []
        self._units = []

    def is_active(self):
        return self._active

    def activate(self):
        self._active = True

    def deactivate(self):
        self._active = False

    def add_cards(self, cards: List[Card]):
        self._cards.extend(cards)

    def add_units(self, units: List[Unit]):
        self._units.extend(units)
