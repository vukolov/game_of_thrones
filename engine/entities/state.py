from typing import List
from .round import Round
from .phase import Phase
from .player import Player


class State:
    def __init__(self, round_: Round, phase: Phase):
        self._round = round_
        self._phase = phase
        self._players = []

    def get_round(self):
        return self._round

    def next_round(self):
        self._round.next()

    def get_phase(self):
        return self._phase

    def next_phase(self):
        self._phase.next()

    def add_player(self, player: Player):
        self._players.append(player)

    def get_active_players(self) -> List[Player]:
        active_players = []
        for player in self._players:
            if player.is_active():
                active_players.append(player)
        return active_players