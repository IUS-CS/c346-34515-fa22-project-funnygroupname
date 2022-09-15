SHELL='bash'

P = npm


TARGETS = Run

all:	$(TARGETS)

Run: Main.o SongManager.o FileManager.o
	$p


Main.o: Main.cpp
	$(CC) -c $(CFLAGS) Main.cpp
FileManager.o: FileManager.cpp
	$(CC) -c $(CFLAGS) FileManager.cpp
SongManager.o: SongManager.cpp
	$(CC) -c $(CURL) $(OPENMP) $(CFLAGS) SongManager.cpp

# This is not done, so PLEASE DO NOT RUN THIS

clean:
	rm -rf curl
