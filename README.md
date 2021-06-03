This repo allows for simple sending and receiving of UDP messages in Node.  These messages should be simple strings or numbers, like those from a sensor or simple program.  If you'd like to explore sending more complex data, you can read more on the dgram documentation [here](https://nodejs.org/api/dgram.html) or try some of the examples in [this]() OSC repo.



When sending from MaxMSP or from [your own computer](https://linuxhint.com/send_receive_udp_packets_linux_cli/), you may get additional characters like a comman (",") or new line ("\n").  You can filter those out like so.
