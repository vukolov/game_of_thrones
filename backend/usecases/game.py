from typing import List
from engine.usecases.game import Game as EngineGame
from ..entities.states.state import State
from ..entities.players.player import Player


class Game(EngineGame):
    def __init__(self):
        self._state = State()
        self._players = []

    def start(self, players: List[Player]):
        for player in players:
            player.add_cards()
            player.add_units()
            player.activate()
            self._state.add_player(player)

    def make_an_order(self):
        ...
