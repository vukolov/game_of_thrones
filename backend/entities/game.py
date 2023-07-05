from .states.phase import Phase
from .states.state import State


class Game:
    def __init__(self):
        self._rounds = 10
        self._first_round = 1
        self._phases = 3
        self._first_phase = 2
        self._phase_order = [
            Phase.WESTEROS_PHASE,
            Phase.PLANNING_PHASE,
            Phase.ACTION_PHASE
        ]
        self._min_players = 2
        self._max_players = 6
        self._state = None

    def create(self):
        ...

    def start(self):
        self._state = State()
