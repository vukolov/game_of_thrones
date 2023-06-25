from typing import List
from random import shuffle
from .card import Card


class CardSet:
    def __init__(self, cards: List[Card]):
        self._cards = cards

    def get_card(self) -> Card:
        return self._cards.pop()

    def shaffle(self):
        shuffle(self._cards)
