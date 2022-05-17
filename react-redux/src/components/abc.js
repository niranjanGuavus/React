class Emitter {
  eventRegister = {};

  subscribe(name, callback) {
    if (name in this.eventRegister) {
      this.eventRegister[name].push(callback);
    } else {
      this.eventRegister[name] = [callback];
    }

    return {
      name: name,
      release: () => {
        if (name in this.eventRegister) {
          delete this.eventRegister[name];
        }
      },
    };
  }

  emit(name, ...args) {
    if (name in this.eventRegister) {
      let callbacks = this.eventRegister[name];
      for (callback of callbacks) {
        callback.apply(this, [...args]);
      }
    }
  }
}
