## Dies ist ein Monitor für die Steckenbelegung der TCL Kartbahn
Aufgabe ist eine einfache Überwachung der Anzahl der gleichzeitig auf der Strecke befindlichen Fahrer.
Inspiriert wurde das Ganze durch eine selbstentwickelte Android Counter App - ähnlich [simple Counter](https://f-droid.org/de/packages/org.quicksc0p3r.simplecounter/).  
Das Problem dabei ist hier, dass der Einweiser an der Streckeneinfahrt nicht sieht, wenn ein Fahrer herausfährt.  
Deswegen arbeitet diese Web-App als Client-Server System, das heisst ein zentraler sql Server hält immer
die aktuelle Anzahl der Fahrer.  
Die Änderungen durch Einfahrt/Ausfahrt können von verschiedenen Geräten (=Personen) parallel verwaltet werden, das heisst, dass z.B. beim Verlassen
der Strecke durch einen Fahrer der Posten der die Ausfahrt einsehen kann, dies an seinem Handy durch Drücken der Taste '-' protokolliert,
die geänderte Anzahl wird durch automatisches Neuladen der Website spätestens alle 15 Sekunden auf allen beteiligten Geräten synchronisiert.  
Dasselbe gilt für den Posten an der Einfahrt, hier muss die Taste '+' gedrückt werden wenn ein neuer Fahrer einfährt.  
So wissen immer alle, wieviele Fahrer gerade auf der Strecke sind.
Beim Gruppenwechsel, wenn sehr schnell eine grössere Anzahl Fahrer einfährt, kann die Eingabe auch numerisch erfolgen, was in diesem Fall schneller geht, als mehrmals Mal '+' zu drücken.  
Am Ende eines Turns (wenn alle rausfahren) kann der Zähler durch die 'Reset' Taste auf Null gesetzt werden.

