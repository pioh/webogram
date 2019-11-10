
      /**
       * vector:Vector t
       * #1cb5c415:481674261:481674261
       * 
       */
      export class XVector {
        static _id = 0x1cb5c415
        _values = [] as [];

        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XVector._id);
            
            
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XVector._id) panic(id.toString(16));
            
            
            return this;
          }
      }
      AllStructs.set(XVector._id, XVector);
    

      /**
       * resPQ:ResPQ
       * #5162463:85337187:85337187
       * nonce:int128
* server_nonce:int128
* pq:bytes
* server_public_key_fingerprints:Vector<long>
       */
      export class XResPq {
        static _id = 0x5162463
        _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(), []] as [Uint8Array, Uint8Array, Uint8Array, Array<ProtoLong>];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_pq (): Uint8Array {
            return this._values[2];
          }
          set_pq (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_server_public_key_fingerprints (): Array<ProtoLong> {
            return this._values[3];
          }
          set_server_public_key_fingerprints (val: Array<ProtoLong>): this {
            this._values[3] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XResPq._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[3] as Array<ProtoLong>;
                  
        buf.writeInt(val.length);
        let vector = val;
        for (let i = 0; i < vector.length; i++) {
          let val = vector[i];
          buf.writeLong(val);
        }
    ;
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XResPq._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readBytes();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as Array<ProtoLong>;
                  
        let len = buf.readInt();
        val.splice(0);
        let vector = val;
        for (let i = 0; i < len; i++) {
          let val: ProtoLong = [0, 0];
          val = buf.readLong();
          vector.push(val);
        }
        ;
                  values[3] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XResPq._id, XResPq);
    

      /**
       * p_q_inner_data:P_Q_inner_data
       * #3c95aec:63527660:-2083955988
       * pq:bytes
* p:bytes
* q:bytes
* nonce:int128
* server_nonce:int128
* new_nonce:int256
       */
      export class XPTQTInnerTData {
        static _id = 0x3c95aec
        _values = [new Uint8Array(), new Uint8Array(), new Uint8Array(), new Uint8Array(16), new Uint8Array(16), new Uint8Array(32)] as [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array];

        
            get_pq (): Uint8Array {
            return this._values[0];
          }
          set_pq (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_p (): Uint8Array {
            return this._values[1];
          }
          set_p (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_q (): Uint8Array {
            return this._values[2];
          }
          set_q (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_nonce (): Uint8Array {
            return this._values[3];
          }
          set_nonce (val: Uint8Array): this {
            this._values[3] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[4];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[4] = val;
            
            return this;
          }
          
        
            get_new_nonce (): Uint8Array {
            return this._values[5];
          }
          set_new_nonce (val: Uint8Array): this {
            this._values[5] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XPTQTInnerTData._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[3] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[4] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[5] as Uint8Array;
                  buf.writeU8A(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XPTQTInnerTData._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readBytes();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readBytes();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readBytes();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as Uint8Array;
                  val = buf.readU8A(4);
                  values[3] = val;
                }
              
                {
                  let val = values[4] as Uint8Array;
                  val = buf.readU8A(4);
                  values[4] = val;
                }
              
                {
                  let val = values[5] as Uint8Array;
                  val = buf.readU8A(8);
                  values[5] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XPTQTInnerTData._id, XPTQTInnerTData);
    

      /**
       * p_q_inner_data_temp:P_Q_inner_data
       * #3c6a84d4:1013613780:1013613780
       * pq:bytes
* p:bytes
* q:bytes
* nonce:int128
* server_nonce:int128
* new_nonce:int256
* expires_in:int
       */
      export class XPTQTInnerTDataTTemp {
        static _id = 0x3c6a84d4
        _values = [new Uint8Array(), new Uint8Array(), new Uint8Array(), new Uint8Array(16), new Uint8Array(16), new Uint8Array(32), 0] as [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, number];

        
            get_pq (): Uint8Array {
            return this._values[0];
          }
          set_pq (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_p (): Uint8Array {
            return this._values[1];
          }
          set_p (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_q (): Uint8Array {
            return this._values[2];
          }
          set_q (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_nonce (): Uint8Array {
            return this._values[3];
          }
          set_nonce (val: Uint8Array): this {
            this._values[3] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[4];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[4] = val;
            
            return this;
          }
          
        
            get_new_nonce (): Uint8Array {
            return this._values[5];
          }
          set_new_nonce (val: Uint8Array): this {
            this._values[5] = val;
            
            return this;
          }
          
        
            get_expires_in (): number {
            return this._values[6];
          }
          set_expires_in (val: number): this {
            this._values[6] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XPTQTInnerTDataTTemp._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[3] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[4] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[5] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[6] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XPTQTInnerTDataTTemp._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readBytes();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readBytes();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readBytes();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as Uint8Array;
                  val = buf.readU8A(4);
                  values[3] = val;
                }
              
                {
                  let val = values[4] as Uint8Array;
                  val = buf.readU8A(4);
                  values[4] = val;
                }
              
                {
                  let val = values[5] as Uint8Array;
                  val = buf.readU8A(8);
                  values[5] = val;
                }
              
                {
                  let val = values[6] as number;
                  val = buf.readInt();
                  values[6] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XPTQTInnerTDataTTemp._id, XPTQTInnerTDataTTemp);
    

      /**
       * server_DH_params_fail:Server_DH_Params
       * #79cb045d:2043348061:2043348061
       * nonce:int128
* server_nonce:int128
* new_nonce_hash:int128
       */
      export class XServerXDhTParamsTFail {
        static _id = 0x79cb045d
        _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(16)] as [Uint8Array, Uint8Array, Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_new_nonce_hash (): Uint8Array {
            return this._values[2];
          }
          set_new_nonce_hash (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XServerXDhTParamsTFail._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeU8A(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XServerXDhTParamsTFail._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readU8A(4);
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XServerXDhTParamsTFail._id, XServerXDhTParamsTFail);
    

      /**
       * server_DH_params_ok:Server_DH_Params
       * #50e8075c:1357383516:-790100132
       * nonce:int128
* server_nonce:int128
* encrypted_answer:bytes
       */
      export class XServerXDhTParamsTOk {
        static _id = 0x50e8075c
        _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array()] as [Uint8Array, Uint8Array, Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_encrypted_answer (): Uint8Array {
            return this._values[2];
          }
          set_encrypted_answer (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XServerXDhTParamsTOk._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeBytes(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XServerXDhTParamsTOk._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readBytes();
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XServerXDhTParamsTOk._id, XServerXDhTParamsTOk);
    

      /**
       * server_DH_inner_data:Server_DH_inner_data
       * #35890dba:898174394:-1249309254
       * nonce:int128
* server_nonce:int128
* g:int
* dh_prime:bytes
* g_a:bytes
* server_time:int
       */
      export class XServerXDhTInnerTData {
        static _id = 0x35890dba
        _values = [new Uint8Array(16), new Uint8Array(16), 0, new Uint8Array(), new Uint8Array(), 0] as [Uint8Array, Uint8Array, number, Uint8Array, Uint8Array, number];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_g (): number {
            return this._values[2];
          }
          set_g (val: number): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_dh_prime (): Uint8Array {
            return this._values[3];
          }
          set_dh_prime (val: Uint8Array): this {
            this._values[3] = val;
            
            return this;
          }
          
        
            get_g_a (): Uint8Array {
            return this._values[4];
          }
          set_g_a (val: Uint8Array): this {
            this._values[4] = val;
            
            return this;
          }
          
        
            get_server_time (): number {
            return this._values[5];
          }
          set_server_time (val: number): this {
            this._values[5] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XServerXDhTInnerTData._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[3] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[4] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[5] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XServerXDhTInnerTData._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as number;
                  val = buf.readInt();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as Uint8Array;
                  val = buf.readBytes();
                  values[3] = val;
                }
              
                {
                  let val = values[4] as Uint8Array;
                  val = buf.readBytes();
                  values[4] = val;
                }
              
                {
                  let val = values[5] as number;
                  val = buf.readInt();
                  values[5] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XServerXDhTInnerTData._id, XServerXDhTInnerTData);
    

      /**
       * client_DH_inner_data:Client_DH_Inner_Data
       * #6643b654:1715713620:1715713620
       * nonce:int128
* server_nonce:int128
* retry_id:long
* g_b:bytes
       */
      export class XClientXDhTInnerTData {
        static _id = 0x6643b654
        _values = [new Uint8Array(16), new Uint8Array(16), [0, 0], new Uint8Array()] as [Uint8Array, Uint8Array, ProtoLong, Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_retry_id (): ProtoLong {
            return this._values[2];
          }
          set_retry_id (val: ProtoLong): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_g_b (): Uint8Array {
            return this._values[3];
          }
          set_g_b (val: Uint8Array): this {
            this._values[3] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XClientXDhTInnerTData._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[3] as Uint8Array;
                  buf.writeBytes(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XClientXDhTInnerTData._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as ProtoLong;
                  val = buf.readLong();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as Uint8Array;
                  val = buf.readBytes();
                  values[3] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XClientXDhTInnerTData._id, XClientXDhTInnerTData);
    

      /**
       * dh_gen_ok:Set_client_DH_params_answer
       * #3bcbf734:1003222836:1003222836
       * nonce:int128
* server_nonce:int128
* new_nonce_hash1:int128
       */
      export class XDhTGenTOk {
        static _id = 0x3bcbf734
        _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(16)] as [Uint8Array, Uint8Array, Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_new_nonce_hash1 (): Uint8Array {
            return this._values[2];
          }
          set_new_nonce_hash1 (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XDhTGenTOk._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeU8A(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XDhTGenTOk._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readU8A(4);
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XDhTGenTOk._id, XDhTGenTOk);
    

      /**
       * dh_gen_retry:Set_client_DH_params_answer
       * #46dc1fb9:1188831161:1188831161
       * nonce:int128
* server_nonce:int128
* new_nonce_hash2:int128
       */
      export class XDhTGenTRetry {
        static _id = 0x46dc1fb9
        _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(16)] as [Uint8Array, Uint8Array, Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_new_nonce_hash2 (): Uint8Array {
            return this._values[2];
          }
          set_new_nonce_hash2 (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XDhTGenTRetry._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeU8A(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XDhTGenTRetry._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readU8A(4);
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XDhTGenTRetry._id, XDhTGenTRetry);
    

      /**
       * dh_gen_fail:Set_client_DH_params_answer
       * #269dae02:647867906:-1499615742
       * nonce:int128
* server_nonce:int128
* new_nonce_hash3:int128
       */
      export class XDhTGenTFail {
        static _id = 0x269dae02
        _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(16)] as [Uint8Array, Uint8Array, Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_new_nonce_hash3 (): Uint8Array {
            return this._values[2];
          }
          set_new_nonce_hash3 (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XDhTGenTFail._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeU8A(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XDhTGenTFail._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readU8A(4);
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XDhTGenTFail._id, XDhTGenTFail);
    

      /**
       * rpc_result:RpcResult
       * #735c6d01:1935437057:-212046591
       * req_msg_id:long
* result:Object
       */
      export class XRpcTResult {
        static _id = 0x735c6d01
        _values = [[0, 0], new OneOf()] as [ProtoLong, OneOf];

        
            get_req_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_req_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_result (): OneOf {
            return this._values[1];
          }
          set_result (val: OneOf): this {
            this._values[1] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XRpcTResult._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as OneOf;
                  val._write(buf);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XRpcTResult._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as OneOf;
                  val = val._read(buf);
                  values[1] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XRpcTResult._id, XRpcTResult);
    

      /**
       * rpc_error:RpcError
       * #2144ca19:558156313:558156313
       * error_code:int
* error_message:string
       */
      export class XRpcTError {
        static _id = 0x2144ca19
        _values = [0, ""] as [number, string];

        
            get_error_code (): number {
            return this._values[0];
          }
          set_error_code (val: number): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_error_message (): string {
            return this._values[1];
          }
          set_error_message (val: string): this {
            this._values[1] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XRpcTError._id);
            let values = this._values;
            
                {
                  let val = values[0] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[1] as string;
                  buf.writeString(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XRpcTError._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as number;
                  val = buf.readInt();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as string;
                  val = buf.readString();
                  values[1] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XRpcTError._id, XRpcTError);
    

      /**
       * rpc_answer_unknown:RpcDropAnswer
       * #5e2ad36e:1579864942:1579864942
       * 
       */
      export class XRpcTAnswerTUnknown {
        static _id = 0x5e2ad36e
        _values = [] as [];

        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XRpcTAnswerTUnknown._id);
            
            
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XRpcTAnswerTUnknown._id) panic(id.toString(16));
            
            
            return this;
          }
      }
      AllStructs.set(XRpcTAnswerTUnknown._id, XRpcTAnswerTUnknown);
    

      /**
       * rpc_answer_dropped_running:RpcDropAnswer
       * #4d78e586:1299768710:-847714938
       * 
       */
      export class XRpcTAnswerTDroppedTRunning {
        static _id = 0x4d78e586
        _values = [] as [];

        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XRpcTAnswerTDroppedTRunning._id);
            
            
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XRpcTAnswerTDroppedTRunning._id) panic(id.toString(16));
            
            
            return this;
          }
      }
      AllStructs.set(XRpcTAnswerTDroppedTRunning._id, XRpcTAnswerTDroppedTRunning);
    

      /**
       * rpc_answer_dropped:RpcDropAnswer
       * #243ad8b7:607836343:-1539647305
       * msg_id:long
* seq_no:int
* bytes:int
       */
      export class XRpcTAnswerTDropped {
        static _id = 0x243ad8b7
        _values = [[0, 0], 0, 0] as [ProtoLong, number, number];

        
            get_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_seq_no (): number {
            return this._values[1];
          }
          set_seq_no (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_bytes (): number {
            return this._values[2];
          }
          set_bytes (val: number): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XRpcTAnswerTDropped._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[2] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XRpcTAnswerTDropped._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as number;
                  val = buf.readInt();
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XRpcTAnswerTDropped._id, XRpcTAnswerTDropped);
    

      /**
       * future_salt:FutureSalt
       * #949d9dc:155834844:155834844
       * valid_since:int
* valid_until:int
* salt:long
       */
      export class XFutureTSalt {
        static _id = 0x949d9dc
        _values = [0, 0, [0, 0]] as [number, number, ProtoLong];

        
            get_valid_since (): number {
            return this._values[0];
          }
          set_valid_since (val: number): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_valid_until (): number {
            return this._values[1];
          }
          set_valid_until (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_salt (): ProtoLong {
            return this._values[2];
          }
          set_salt (val: ProtoLong): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XFutureTSalt._id);
            let values = this._values;
            
                {
                  let val = values[0] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[2] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XFutureTSalt._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as number;
                  val = buf.readInt();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as ProtoLong;
                  val = buf.readLong();
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XFutureTSalt._id, XFutureTSalt);
    

      /**
       * future_salts:FutureSalts
       * #2e500895:776997013:-1370486635
       * req_msg_id:long
* now:int
* salts:vector<future_salt>
       */
      export class XFutureTSalts {
        static _id = 0x2e500895
        _values = [[0, 0], 0, new XVector<futureTSalt>()] as [ProtoLong, number, XVector<futureTSalt>];

        
            get_req_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_req_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_now (): number {
            return this._values[1];
          }
          set_now (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_salts (): XVector<futureTSalt> {
            return this._values[2];
          }
          set_salts (val: XVector<futureTSalt>): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XFutureTSalts._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[2] as XVector<futureTSalt>;
                  val._write(buf);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XFutureTSalts._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as XVector<futureTSalt>;
                  val = val._read(buf);
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XFutureTSalts._id, XFutureTSalts);
    

      /**
       * pong:Pong
       * #347773c5:880243653:880243653
       * msg_id:long
* ping_id:long
       */
      export class XPong {
        static _id = 0x347773c5
        _values = [[0, 0], [0, 0]] as [ProtoLong, ProtoLong];

        
            get_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_ping_id (): ProtoLong {
            return this._values[1];
          }
          set_ping_id (val: ProtoLong): this {
            this._values[1] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XPong._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XPong._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as ProtoLong;
                  val = buf.readLong();
                  values[1] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XPong._id, XPong);
    

      /**
       * destroy_session_ok:DestroySessionRes
       * #622045fc:1646282236:-501201412
       * session_id:long
       */
      export class XDestroyTSessionTOk {
        static _id = 0x622045fc
        _values = [[0, 0]] as [ProtoLong];

        
            get_session_id (): ProtoLong {
            return this._values[0];
          }
          set_session_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XDestroyTSessionTOk._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XDestroyTSessionTOk._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XDestroyTSessionTOk._id, XDestroyTSessionTOk);
    

      /**
       * destroy_session_none:DestroySessionRes
       * #62d350c9:1658015945:1658015945
       * session_id:long
       */
      export class XDestroyTSessionTNone {
        static _id = 0x62d350c9
        _values = [[0, 0]] as [ProtoLong];

        
            get_session_id (): ProtoLong {
            return this._values[0];
          }
          set_session_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XDestroyTSessionTNone._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XDestroyTSessionTNone._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XDestroyTSessionTNone._id, XDestroyTSessionTNone);
    

      /**
       * new_session_created:NewSession
       * #1ec20908:516032776:-1631450872
       * first_msg_id:long
* unique_id:long
* server_salt:long
       */
      export class XNewTSessionTCreated {
        static _id = 0x1ec20908
        _values = [[0, 0], [0, 0], [0, 0]] as [ProtoLong, ProtoLong, ProtoLong];

        
            get_first_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_first_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_unique_id (): ProtoLong {
            return this._values[1];
          }
          set_unique_id (val: ProtoLong): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_server_salt (): ProtoLong {
            return this._values[2];
          }
          set_server_salt (val: ProtoLong): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XNewTSessionTCreated._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[2] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XNewTSessionTCreated._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as ProtoLong;
                  val = buf.readLong();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as ProtoLong;
                  val = buf.readLong();
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XNewTSessionTCreated._id, XNewTSessionTCreated);
    

      /**
       * msg_container:MessageContainer
       * #73f1f8dc:1945237724:1945237724
       * messages:vector<%Message>
       */
      export class XMsgTContainer {
        static _id = 0x73f1f8dc
        _values = [new XVector<%message>()] as [XVector<%message>];

        
            get_messages (): XVector<%message> {
            return this._values[0];
          }
          set_messages (val: XVector<%message>): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgTContainer._id);
            let values = this._values;
            
                {
                  let val = values[0] as XVector<%message>;
                  val._write(buf);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgTContainer._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as XVector<%message>;
                  val = val._read(buf);
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgTContainer._id, XMsgTContainer);
    

      /**
       * message:Message
       * #5bb8e511:1538843921:1538843921
       * msg_id:long
* seqno:int
* bytes:int
* body:Object
       */
      export class XMessage {
        static _id = 0x5bb8e511
        _values = [[0, 0], 0, 0, new OneOf()] as [ProtoLong, number, number, OneOf];

        
            get_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_seqno (): number {
            return this._values[1];
          }
          set_seqno (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_bytes (): number {
            return this._values[2];
          }
          set_bytes (val: number): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_body (): OneOf {
            return this._values[3];
          }
          set_body (val: OneOf): this {
            this._values[3] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMessage._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[2] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[3] as OneOf;
                  val._write(buf);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMessage._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as number;
                  val = buf.readInt();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as OneOf;
                  val = val._read(buf);
                  values[3] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMessage._id, XMessage);
    

      /**
       * msg_copy:MessageCopy
       * #606046b2:1616922290:-530561358
       * orig_message:Message
       */
      export class XMsgTCopy {
        static _id = 0x606046b2
        _values = [new TMessage()] as [TMessage];

        
            get_orig_message (): TMessage {
            return this._values[0];
          }
          set_orig_message (val: TMessage): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgTCopy._id);
            let values = this._values;
            
                {
                  let val = values[0] as TMessage;
                  val._write(buf);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgTCopy._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as TMessage;
                  val = val._read(buf);
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgTCopy._id, XMsgTCopy);
    

      /**
       * gzip_packed:Object
       * #3072cfa1:812830625:812830625
       * packed_data:bytes
       */
      export class XGzipTPacked {
        static _id = 0x3072cfa1
        _values = [new Uint8Array()] as [Uint8Array];

        
            get_packed_data (): Uint8Array {
            return this._values[0];
          }
          set_packed_data (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XGzipTPacked._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeBytes(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XGzipTPacked._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readBytes();
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XGzipTPacked._id, XGzipTPacked);
    

      /**
       * msgs_ack:MsgsAck
       * #62d6b459:1658238041:1658238041
       * msg_ids:Vector<long>
       */
      export class XMsgsTAck {
        static _id = 0x62d6b459
        _values = [[]] as [Array<ProtoLong>];

        
            get_msg_ids (): Array<ProtoLong> {
            return this._values[0];
          }
          set_msg_ids (val: Array<ProtoLong>): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgsTAck._id);
            let values = this._values;
            
                {
                  let val = values[0] as Array<ProtoLong>;
                  
        buf.writeInt(val.length);
        let vector = val;
        for (let i = 0; i < vector.length; i++) {
          let val = vector[i];
          buf.writeLong(val);
        }
    ;
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgsTAck._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Array<ProtoLong>;
                  
        let len = buf.readInt();
        val.splice(0);
        let vector = val;
        for (let i = 0; i < len; i++) {
          let val: ProtoLong = [0, 0];
          val = buf.readLong();
          vector.push(val);
        }
        ;
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgsTAck._id, XMsgsTAck);
    

      /**
       * bad_msg_notification:BadMsgNotification
       * #27eff811:670038033:-1477445615
       * bad_msg_id:long
* bad_msg_seqno:int
* error_code:int
       */
      export class XBadTMsgTNotification {
        static _id = 0x27eff811
        _values = [[0, 0], 0, 0] as [ProtoLong, number, number];

        
            get_bad_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_bad_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_bad_msg_seqno (): number {
            return this._values[1];
          }
          set_bad_msg_seqno (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_error_code (): number {
            return this._values[2];
          }
          set_error_code (val: number): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XBadTMsgTNotification._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[2] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XBadTMsgTNotification._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as number;
                  val = buf.readInt();
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XBadTMsgTNotification._id, XBadTMsgTNotification);
    

      /**
       * bad_server_salt:BadMsgNotification
       * #6dab447b:1839940731:-307542917
       * bad_msg_id:long
* bad_msg_seqno:int
* error_code:int
* new_server_salt:long
       */
      export class XBadTServerTSalt {
        static _id = 0x6dab447b
        _values = [[0, 0], 0, 0, [0, 0]] as [ProtoLong, number, number, ProtoLong];

        
            get_bad_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_bad_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_bad_msg_seqno (): number {
            return this._values[1];
          }
          set_bad_msg_seqno (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_error_code (): number {
            return this._values[2];
          }
          set_error_code (val: number): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_new_server_salt (): ProtoLong {
            return this._values[3];
          }
          set_new_server_salt (val: ProtoLong): this {
            this._values[3] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XBadTServerTSalt._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[2] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[3] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XBadTServerTSalt._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as number;
                  val = buf.readInt();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as ProtoLong;
                  val = buf.readLong();
                  values[3] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XBadTServerTSalt._id, XBadTServerTSalt);
    

      /**
       * msg_resend_req:MsgResendReq
       * #7d861a08:2105940488:2105940488
       * msg_ids:Vector<long>
       */
      export class XMsgTResendTReq {
        static _id = 0x7d861a08
        _values = [[]] as [Array<ProtoLong>];

        
            get_msg_ids (): Array<ProtoLong> {
            return this._values[0];
          }
          set_msg_ids (val: Array<ProtoLong>): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgTResendTReq._id);
            let values = this._values;
            
                {
                  let val = values[0] as Array<ProtoLong>;
                  
        buf.writeInt(val.length);
        let vector = val;
        for (let i = 0; i < vector.length; i++) {
          let val = vector[i];
          buf.writeLong(val);
        }
    ;
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgTResendTReq._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Array<ProtoLong>;
                  
        let len = buf.readInt();
        val.splice(0);
        let vector = val;
        for (let i = 0; i < len; i++) {
          let val: ProtoLong = [0, 0];
          val = buf.readLong();
          vector.push(val);
        }
        ;
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgTResendTReq._id, XMsgTResendTReq);
    

      /**
       * msgs_state_req:MsgsStateReq
       * #5a69fb52:1516895058:-630588590
       * msg_ids:Vector<long>
       */
      export class XMsgsTStateTReq {
        static _id = 0x5a69fb52
        _values = [[]] as [Array<ProtoLong>];

        
            get_msg_ids (): Array<ProtoLong> {
            return this._values[0];
          }
          set_msg_ids (val: Array<ProtoLong>): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgsTStateTReq._id);
            let values = this._values;
            
                {
                  let val = values[0] as Array<ProtoLong>;
                  
        buf.writeInt(val.length);
        let vector = val;
        for (let i = 0; i < vector.length; i++) {
          let val = vector[i];
          buf.writeLong(val);
        }
    ;
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgsTStateTReq._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Array<ProtoLong>;
                  
        let len = buf.readInt();
        val.splice(0);
        let vector = val;
        for (let i = 0; i < len; i++) {
          let val: ProtoLong = [0, 0];
          val = buf.readLong();
          vector.push(val);
        }
        ;
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgsTStateTReq._id, XMsgsTStateTReq);
    

      /**
       * msgs_state_info:MsgsStateInfo
       * #4deb57d:81704317:81704317
       * req_msg_id:long
* info:bytes
       */
      export class XMsgsTStateTInfo {
        static _id = 0x4deb57d
        _values = [[0, 0], new Uint8Array()] as [ProtoLong, Uint8Array];

        
            get_req_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_req_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_info (): Uint8Array {
            return this._values[1];
          }
          set_info (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgsTStateTInfo._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeBytes(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgsTStateTInfo._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readBytes();
                  values[1] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgsTStateTInfo._id, XMsgsTStateTInfo);
    

      /**
       * msgs_all_info:MsgsAllInfo
       * #cc0d131:213963057:-1933520591
       * msg_ids:Vector<long>
* info:bytes
       */
      export class XMsgsTAllTInfo {
        static _id = 0xcc0d131
        _values = [[], new Uint8Array()] as [Array<ProtoLong>, Uint8Array];

        
            get_msg_ids (): Array<ProtoLong> {
            return this._values[0];
          }
          set_msg_ids (val: Array<ProtoLong>): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_info (): Uint8Array {
            return this._values[1];
          }
          set_info (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgsTAllTInfo._id);
            let values = this._values;
            
                {
                  let val = values[0] as Array<ProtoLong>;
                  
        buf.writeInt(val.length);
        let vector = val;
        for (let i = 0; i < vector.length; i++) {
          let val = vector[i];
          buf.writeLong(val);
        }
    ;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeBytes(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgsTAllTInfo._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Array<ProtoLong>;
                  
        let len = buf.readInt();
        val.splice(0);
        let vector = val;
        for (let i = 0; i < len; i++) {
          let val: ProtoLong = [0, 0];
          val = buf.readLong();
          vector.push(val);
        }
        ;
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readBytes();
                  values[1] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgsTAllTInfo._id, XMsgsTAllTInfo);
    

      /**
       * msg_detailed_info:MsgDetailedInfo
       * #276d3ec6:661470918:661470918
       * msg_id:long
* answer_msg_id:long
* bytes:int
* status:int
       */
      export class XMsgTDetailedTInfo {
        static _id = 0x276d3ec6
        _values = [[0, 0], [0, 0], 0, 0] as [ProtoLong, ProtoLong, number, number];

        
            get_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_answer_msg_id (): ProtoLong {
            return this._values[1];
          }
          set_answer_msg_id (val: ProtoLong): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_bytes (): number {
            return this._values[2];
          }
          set_bytes (val: number): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_status (): number {
            return this._values[3];
          }
          set_status (val: number): this {
            this._values[3] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgTDetailedTInfo._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[2] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[3] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgTDetailedTInfo._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as ProtoLong;
                  val = buf.readLong();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as number;
                  val = buf.readInt();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as number;
                  val = buf.readInt();
                  values[3] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgTDetailedTInfo._id, XMsgTDetailedTInfo);
    

      /**
       * msg_new_detailed_info:MsgDetailedInfo
       * #9db6df:10335967:-2137147681
       * answer_msg_id:long
* bytes:int
* status:int
       */
      export class XMsgTNewTDetailedTInfo {
        static _id = 0x9db6df
        _values = [[0, 0], 0, 0] as [ProtoLong, number, number];

        
            get_answer_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_answer_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_bytes (): number {
            return this._values[1];
          }
          set_bytes (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_status (): number {
            return this._values[2];
          }
          set_status (val: number): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XMsgTNewTDetailedTInfo._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[2] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XMsgTNewTDetailedTInfo._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as number;
                  val = buf.readInt();
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XMsgTNewTDetailedTInfo._id, XMsgTNewTDetailedTInfo);
    

      /**
       * bind_auth_key_inner:BindAuthKeyInner
       * #75a3f765:1973679973:1973679973
       * nonce:long
* temp_auth_key_id:long
* perm_auth_key_id:long
* temp_session_id:long
* expires_at:int
       */
      export class XBindTAuthTKeyTInner {
        static _id = 0x75a3f765
        _values = [[0, 0], [0, 0], [0, 0], [0, 0], 0] as [ProtoLong, ProtoLong, ProtoLong, ProtoLong, number];

        
            get_nonce (): ProtoLong {
            return this._values[0];
          }
          set_nonce (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_temp_auth_key_id (): ProtoLong {
            return this._values[1];
          }
          set_temp_auth_key_id (val: ProtoLong): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_perm_auth_key_id (): ProtoLong {
            return this._values[2];
          }
          set_perm_auth_key_id (val: ProtoLong): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_temp_session_id (): ProtoLong {
            return this._values[3];
          }
          set_temp_session_id (val: ProtoLong): this {
            this._values[3] = val;
            
            return this;
          }
          
        
            get_expires_at (): number {
            return this._values[4];
          }
          set_expires_at (val: number): this {
            this._values[4] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(XBindTAuthTKeyTInner._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[2] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[3] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[4] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== XBindTAuthTKeyTInner._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as ProtoLong;
                  val = buf.readLong();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as ProtoLong;
                  val = buf.readLong();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as ProtoLong;
                  val = buf.readLong();
                  values[3] = val;
                }
              
                {
                  let val = values[4] as number;
                  val = buf.readInt();
                  values[4] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(XBindTAuthTKeyTInner._id, XBindTAuthTKeyTInner);
    

      /**
       * MXReqTPq:MXReqTPq
       * #60469778:1615239032:1615239032
       * nonce:int128
       */
      export class TMxReqTPq {
        static _id = 0x60469778
        _values = [new Uint8Array(16)] as [Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxReqTPq._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxReqTPq._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxReqTPq._id, TMxReqTPq);
    

  /**
   * req_pq:ResPQ
   * #60469778:1615239032:1615239032
   * nonce:int128
   */
  export function CallTMxReqTPq (invoker: ApiInvoker, req: TMxReqTPq): Promise<TResPq> {
    return invoker.call(req, (buf: ByteBuffer): TResPq => {
      let val: TResPq = new TResPq();
      val = val._read(buf);
      return val;
    });
  }
  

      /**
       * MXReqXDhTParams:MXReqXDhTParams
       * #5712e4be:1460855998:-686627650
       * nonce:int128
* server_nonce:int128
* p:bytes
* q:bytes
* public_key_fingerprint:long
* encrypted_data:bytes
       */
      export class TMxReqXDhTParams {
        static _id = 0x5712e4be
        _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array(), new Uint8Array(), [0, 0], new Uint8Array()] as [Uint8Array, Uint8Array, Uint8Array, Uint8Array, ProtoLong, Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_p (): Uint8Array {
            return this._values[2];
          }
          set_p (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
            get_q (): Uint8Array {
            return this._values[3];
          }
          set_q (val: Uint8Array): this {
            this._values[3] = val;
            
            return this;
          }
          
        
            get_public_key_fingerprint (): ProtoLong {
            return this._values[4];
          }
          set_public_key_fingerprint (val: ProtoLong): this {
            this._values[4] = val;
            
            return this;
          }
          
        
            get_encrypted_data (): Uint8Array {
            return this._values[5];
          }
          set_encrypted_data (val: Uint8Array): this {
            this._values[5] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxReqXDhTParams._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[3] as Uint8Array;
                  buf.writeBytes(val);
                }
              
                {
                  let val = values[4] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[5] as Uint8Array;
                  buf.writeBytes(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxReqXDhTParams._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readBytes();
                  values[2] = val;
                }
              
                {
                  let val = values[3] as Uint8Array;
                  val = buf.readBytes();
                  values[3] = val;
                }
              
                {
                  let val = values[4] as ProtoLong;
                  val = buf.readLong();
                  values[4] = val;
                }
              
                {
                  let val = values[5] as Uint8Array;
                  val = buf.readBytes();
                  values[5] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxReqXDhTParams._id, TMxReqXDhTParams);
    

  /**
   * req_DH_params:Server_DH_Params
   * #5712e4be:1460855998:-686627650
   * nonce:int128
* server_nonce:int128
* p:bytes
* q:bytes
* public_key_fingerprint:long
* encrypted_data:bytes
   */
  export function CallTMxReqXDhTParams (invoker: ApiInvoker, req: TMxReqXDhTParams): Promise<TServerXDhXParams> {
    return invoker.call(req, (buf: ByteBuffer): TServerXDhXParams => {
      let val: TServerXDhXParams = new TServerXDhXParams();
      val = val._read(buf);
      return val;
    });
  }
  

      /**
       * MXSetTClientXDhTParams:MXSetTClientXDhTParams
       * #75045f1f:1963220767:-184262881
       * nonce:int128
* server_nonce:int128
* encrypted_data:bytes
       */
      export class TMxSetTClientXDhTParams {
        static _id = 0x75045f1f
        _values = [new Uint8Array(16), new Uint8Array(16), new Uint8Array()] as [Uint8Array, Uint8Array, Uint8Array];

        
            get_nonce (): Uint8Array {
            return this._values[0];
          }
          set_nonce (val: Uint8Array): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_server_nonce (): Uint8Array {
            return this._values[1];
          }
          set_server_nonce (val: Uint8Array): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_encrypted_data (): Uint8Array {
            return this._values[2];
          }
          set_encrypted_data (val: Uint8Array): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxSetTClientXDhTParams._id);
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[1] as Uint8Array;
                  buf.writeU8A(val);
                }
              
                {
                  let val = values[2] as Uint8Array;
                  buf.writeBytes(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxSetTClientXDhTParams._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as Uint8Array;
                  val = buf.readU8A(4);
                  values[0] = val;
                }
              
                {
                  let val = values[1] as Uint8Array;
                  val = buf.readU8A(4);
                  values[1] = val;
                }
              
                {
                  let val = values[2] as Uint8Array;
                  val = buf.readBytes();
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxSetTClientXDhTParams._id, TMxSetTClientXDhTParams);
    

  /**
   * set_client_DH_params:Set_client_DH_params_answer
   * #75045f1f:1963220767:-184262881
   * nonce:int128
* server_nonce:int128
* encrypted_data:bytes
   */
  export function CallTMxSetTClientXDhTParams (invoker: ApiInvoker, req: TMxSetTClientXDhTParams): Promise<TSetTClientXDhTParamsTAnswer> {
    return invoker.call(req, (buf: ByteBuffer): TSetTClientXDhTParamsTAnswer => {
      let val: TSetTClientXDhTParamsTAnswer = new TSetTClientXDhTParamsTAnswer();
      val = val._read(buf);
      return val;
    });
  }
  

      /**
       * MXRpcTDropTAnswer:MXRpcTDropTAnswer
       * #58e4a740:1491380032:1491380032
       * req_msg_id:long
       */
      export class TMxRpcTDropTAnswer {
        static _id = 0x58e4a740
        _values = [[0, 0]] as [ProtoLong];

        
            get_req_msg_id (): ProtoLong {
            return this._values[0];
          }
          set_req_msg_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxRpcTDropTAnswer._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxRpcTDropTAnswer._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxRpcTDropTAnswer._id, TMxRpcTDropTAnswer);
    

  /**
   * rpc_drop_answer:RpcDropAnswer
   * #58e4a740:1491380032:1491380032
   * req_msg_id:long
   */
  export function CallTMxRpcTDropTAnswer (invoker: ApiInvoker, req: TMxRpcTDropTAnswer): Promise<TRpcDropAnswer> {
    return invoker.call(req, (buf: ByteBuffer): TRpcDropAnswer => {
      let val: TRpcDropAnswer = new TRpcDropAnswer();
      val = val._read(buf);
      return val;
    });
  }
  

      /**
       * MXGetTFutureTSalts:MXGetTFutureTSalts
       * #3921bd04:958512388:-1188971260
       * num:int
       */
      export class TMxGetTFutureTSalts {
        static _id = 0x3921bd04
        _values = [0] as [number];

        
            get_num (): number {
            return this._values[0];
          }
          set_num (val: number): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxGetTFutureTSalts._id);
            let values = this._values;
            
                {
                  let val = values[0] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxGetTFutureTSalts._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as number;
                  val = buf.readInt();
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxGetTFutureTSalts._id, TMxGetTFutureTSalts);
    

  /**
   * get_future_salts:FutureSalts
   * #3921bd04:958512388:-1188971260
   * num:int
   */
  export function CallTMxGetTFutureTSalts (invoker: ApiInvoker, req: TMxGetTFutureTSalts): Promise<TFutureSalts> {
    return invoker.call(req, (buf: ByteBuffer): TFutureSalts => {
      let val: TFutureSalts = new TFutureSalts();
      val = val._read(buf);
      return val;
    });
  }
  

      /**
       * MXPing:MXPing
       * #7abe77ec:2059302892:2059302892
       * ping_id:long
       */
      export class TMxPing {
        static _id = 0x7abe77ec
        _values = [[0, 0]] as [ProtoLong];

        
            get_ping_id (): ProtoLong {
            return this._values[0];
          }
          set_ping_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxPing._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxPing._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxPing._id, TMxPing);
    

  /**
   * ping:Pong
   * #7abe77ec:2059302892:2059302892
   * ping_id:long
   */
  export function CallTMxPing (invoker: ApiInvoker, req: TMxPing): Promise<TPong> {
    return invoker.call(req, (buf: ByteBuffer): TPong => {
      let val: TPong = new TPong();
      val = val._read(buf);
      return val;
    });
  }
  

      /**
       * MXPingTDelayTDisconnect:MXPingTDelayTDisconnect
       * #73427b8c:1933736844:-213746804
       * ping_id:long
* disconnect_delay:int
       */
      export class TMxPingTDelayTDisconnect {
        static _id = 0x73427b8c
        _values = [[0, 0], 0] as [ProtoLong, number];

        
            get_ping_id (): ProtoLong {
            return this._values[0];
          }
          set_ping_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_disconnect_delay (): number {
            return this._values[1];
          }
          set_disconnect_delay (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxPingTDelayTDisconnect._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxPingTDelayTDisconnect._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxPingTDelayTDisconnect._id, TMxPingTDelayTDisconnect);
    

  /**
   * ping_delay_disconnect:Pong
   * #73427b8c:1933736844:-213746804
   * ping_id:long
* disconnect_delay:int
   */
  export function CallTMxPingTDelayTDisconnect (invoker: ApiInvoker, req: TMxPingTDelayTDisconnect): Promise<TPong> {
    return invoker.call(req, (buf: ByteBuffer): TPong => {
      let val: TPong = new TPong();
      val = val._read(buf);
      return val;
    });
  }
  

      /**
       * MXDestroyTSession:MXDestroyTSession
       * #67512126:1733370150:-414113498
       * session_id:long
       */
      export class TMxDestroyTSession {
        static _id = 0x67512126
        _values = [[0, 0]] as [ProtoLong];

        
            get_session_id (): ProtoLong {
            return this._values[0];
          }
          set_session_id (val: ProtoLong): this {
            this._values[0] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxDestroyTSession._id);
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  buf.writeLong(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxDestroyTSession._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as ProtoLong;
                  val = buf.readLong();
                  values[0] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxDestroyTSession._id, TMxDestroyTSession);
    

  /**
   * destroy_session:DestroySessionRes
   * #67512126:1733370150:-414113498
   * session_id:long
   */
  export function CallTMxDestroyTSession (invoker: ApiInvoker, req: TMxDestroyTSession): Promise<TDestroySessionRes> {
    return invoker.call(req, (buf: ByteBuffer): TDestroySessionRes => {
      let val: TDestroySessionRes = new TDestroySessionRes();
      val = val._read(buf);
      return val;
    });
  }
  

      /**
       * MXHttpTWait:MXHttpTWait
       * #1299359f:312030623:-1835453025
       * max_delay:int
* wait_after:int
* max_wait:int
       */
      export class TMxHttpTWait {
        static _id = 0x1299359f
        _values = [0, 0, 0] as [number, number, number];

        
            get_max_delay (): number {
            return this._values[0];
          }
          set_max_delay (val: number): this {
            this._values[0] = val;
            
            return this;
          }
          
        
            get_wait_after (): number {
            return this._values[1];
          }
          set_wait_after (val: number): this {
            this._values[1] = val;
            
            return this;
          }
          
        
            get_max_wait (): number {
            return this._values[2];
          }
          set_max_wait (val: number): this {
            this._values[2] = val;
            
            return this;
          }
          
        
          _write(buf: ByteBuffer): this {
            buf.writeInt(TMxHttpTWait._id);
            let values = this._values;
            
                {
                  let val = values[0] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[1] as number;
                  buf.writeInt(val);
                }
              
                {
                  let val = values[2] as number;
                  buf.writeInt(val);
                }
              
            return this;
          }
          _read(buf: ByteBuffer): this {
            let id = buf.readUInt();
            if (id !== TMxHttpTWait._id) panic(id.toString(16));
            let values = this._values;
            
                {
                  let val = values[0] as number;
                  val = buf.readInt();
                  values[0] = val;
                }
              
                {
                  let val = values[1] as number;
                  val = buf.readInt();
                  values[1] = val;
                }
              
                {
                  let val = values[2] as number;
                  val = buf.readInt();
                  values[2] = val;
                }
              
            return this;
          }
      }
      AllStructs.set(TMxHttpTWait._id, TMxHttpTWait);
    

  /**
   * http_wait:HttpWait
   * #1299359f:312030623:-1835453025
   * max_delay:int
* wait_after:int
* max_wait:int
   */
  export function CallTMxHttpTWait (invoker: ApiInvoker, req: TMxHttpTWait): Promise<THttpWait> {
    return invoker.call(req, (buf: ByteBuffer): THttpWait => {
      let val: THttpWait = new THttpWait();
      val = val._read(buf);
      return val;
    });
  }
  

      const TBoolOneOfTypes: Array<typeof XBoolFalse | typeof XBoolTrue> = [XBoolFalse, XBoolTrue];
      export class TBool extends OneOf<typeof XBoolFalse | typeof XBoolTrue, XBoolFalse | XBoolTrue> {
        getTypes() {
          return TBoolOneOfTypes;
        }
      }
export class TTrue extends XTrue {
      }

      const TVectorTTOneOfTypes: Array<typeof XVector | typeof XVector> = [XVector, XVector];
      export class TVectorTT extends OneOf<typeof XVector | typeof XVector, XVector | XVector> {
        getTypes() {
          return TVectorTTOneOfTypes;
        }
      }
export class TError extends XError {
      }
export class TNull extends XNull {
      }

      const TInputPeerOneOfTypes: Array<typeof XInputPeerEmpty | typeof XInputPeerSelf | typeof XInputPeerChat | typeof XInputPeerUser | typeof XInputPeerChannel | typeof XInputPeerUserFromMessage | typeof XInputPeerChannelFromMessage> = [XInputPeerEmpty, XInputPeerSelf, XInputPeerChat, XInputPeerUser, XInputPeerChannel, XInputPeerUserFromMessage, XInputPeerChannelFromMessage];
      export class TInputPeer extends OneOf<typeof XInputPeerEmpty | typeof XInputPeerSelf | typeof XInputPeerChat | typeof XInputPeerUser | typeof XInputPeerChannel | typeof XInputPeerUserFromMessage | typeof XInputPeerChannelFromMessage, XInputPeerEmpty | XInputPeerSelf | XInputPeerChat | XInputPeerUser | XInputPeerChannel | XInputPeerUserFromMessage | XInputPeerChannelFromMessage> {
        getTypes() {
          return TInputPeerOneOfTypes;
        }
      }

      const TInputUserOneOfTypes: Array<typeof XInputUserEmpty | typeof XInputUserSelf | typeof XInputUser | typeof XInputUserFromMessage> = [XInputUserEmpty, XInputUserSelf, XInputUser, XInputUserFromMessage];
      export class TInputUser extends OneOf<typeof XInputUserEmpty | typeof XInputUserSelf | typeof XInputUser | typeof XInputUserFromMessage, XInputUserEmpty | XInputUserSelf | XInputUser | XInputUserFromMessage> {
        getTypes() {
          return TInputUserOneOfTypes;
        }
      }
export class TInputContact extends XInputPhoneContact {
      }

      const TInputFileOneOfTypes: Array<typeof XInputFile | typeof XInputFileBig> = [XInputFile, XInputFileBig];
      export class TInputFile extends OneOf<typeof XInputFile | typeof XInputFileBig, XInputFile | XInputFileBig> {
        getTypes() {
          return TInputFileOneOfTypes;
        }
      }

      const TInputMediaOneOfTypes: Array<typeof XInputMediaEmpty | typeof XInputMediaUploadedPhoto | typeof XInputMediaPhoto | typeof XInputMediaGeoPoint | typeof XInputMediaContact | typeof XInputMediaUploadedDocument | typeof XInputMediaDocument | typeof XInputMediaVenue | typeof XInputMediaGifExternal | typeof XInputMediaPhotoExternal | typeof XInputMediaDocumentExternal | typeof XInputMediaGame | typeof XInputMediaInvoice | typeof XInputMediaGeoLive | typeof XInputMediaPoll> = [XInputMediaEmpty, XInputMediaUploadedPhoto, XInputMediaPhoto, XInputMediaGeoPoint, XInputMediaContact, XInputMediaUploadedDocument, XInputMediaDocument, XInputMediaVenue, XInputMediaGifExternal, XInputMediaPhotoExternal, XInputMediaDocumentExternal, XInputMediaGame, XInputMediaInvoice, XInputMediaGeoLive, XInputMediaPoll];
      export class TInputMedia extends OneOf<typeof XInputMediaEmpty | typeof XInputMediaUploadedPhoto | typeof XInputMediaPhoto | typeof XInputMediaGeoPoint | typeof XInputMediaContact | typeof XInputMediaUploadedDocument | typeof XInputMediaDocument | typeof XInputMediaVenue | typeof XInputMediaGifExternal | typeof XInputMediaPhotoExternal | typeof XInputMediaDocumentExternal | typeof XInputMediaGame | typeof XInputMediaInvoice | typeof XInputMediaGeoLive | typeof XInputMediaPoll, XInputMediaEmpty | XInputMediaUploadedPhoto | XInputMediaPhoto | XInputMediaGeoPoint | XInputMediaContact | XInputMediaUploadedDocument | XInputMediaDocument | XInputMediaVenue | XInputMediaGifExternal | XInputMediaPhotoExternal | XInputMediaDocumentExternal | XInputMediaGame | XInputMediaInvoice | XInputMediaGeoLive | XInputMediaPoll> {
        getTypes() {
          return TInputMediaOneOfTypes;
        }
      }

      const TInputChatPhotoOneOfTypes: Array<typeof XInputChatPhotoEmpty | typeof XInputChatUploadedPhoto | typeof XInputChatPhoto> = [XInputChatPhotoEmpty, XInputChatUploadedPhoto, XInputChatPhoto];
      export class TInputChatPhoto extends OneOf<typeof XInputChatPhotoEmpty | typeof XInputChatUploadedPhoto | typeof XInputChatPhoto, XInputChatPhotoEmpty | XInputChatUploadedPhoto | XInputChatPhoto> {
        getTypes() {
          return TInputChatPhotoOneOfTypes;
        }
      }

      const TInputGeoPointOneOfTypes: Array<typeof XInputGeoPointEmpty | typeof XInputGeoPoint> = [XInputGeoPointEmpty, XInputGeoPoint];
      export class TInputGeoPoint extends OneOf<typeof XInputGeoPointEmpty | typeof XInputGeoPoint, XInputGeoPointEmpty | XInputGeoPoint> {
        getTypes() {
          return TInputGeoPointOneOfTypes;
        }
      }

      const TInputPhotoOneOfTypes: Array<typeof XInputPhotoEmpty | typeof XInputPhoto> = [XInputPhotoEmpty, XInputPhoto];
      export class TInputPhoto extends OneOf<typeof XInputPhotoEmpty | typeof XInputPhoto, XInputPhotoEmpty | XInputPhoto> {
        getTypes() {
          return TInputPhotoOneOfTypes;
        }
      }

      const TInputFileLocationOneOfTypes: Array<typeof XInputFileLocation | typeof XInputEncryptedFileLocation | typeof XInputDocumentFileLocation | typeof XInputSecureFileLocation | typeof XInputTakeoutFileLocation | typeof XInputPhotoFileLocation | typeof XInputPhotoLegacyFileLocation | typeof XInputPeerPhotoFileLocation | typeof XInputStickerSetThumb> = [XInputFileLocation, XInputEncryptedFileLocation, XInputDocumentFileLocation, XInputSecureFileLocation, XInputTakeoutFileLocation, XInputPhotoFileLocation, XInputPhotoLegacyFileLocation, XInputPeerPhotoFileLocation, XInputStickerSetThumb];
      export class TInputFileLocation extends OneOf<typeof XInputFileLocation | typeof XInputEncryptedFileLocation | typeof XInputDocumentFileLocation | typeof XInputSecureFileLocation | typeof XInputTakeoutFileLocation | typeof XInputPhotoFileLocation | typeof XInputPhotoLegacyFileLocation | typeof XInputPeerPhotoFileLocation | typeof XInputStickerSetThumb, XInputFileLocation | XInputEncryptedFileLocation | XInputDocumentFileLocation | XInputSecureFileLocation | XInputTakeoutFileLocation | XInputPhotoFileLocation | XInputPhotoLegacyFileLocation | XInputPeerPhotoFileLocation | XInputStickerSetThumb> {
        getTypes() {
          return TInputFileLocationOneOfTypes;
        }
      }

      const TPeerOneOfTypes: Array<typeof XPeerUser | typeof XPeerChat | typeof XPeerChannel> = [XPeerUser, XPeerChat, XPeerChannel];
      export class TPeer extends OneOf<typeof XPeerUser | typeof XPeerChat | typeof XPeerChannel, XPeerUser | XPeerChat | XPeerChannel> {
        getTypes() {
          return TPeerOneOfTypes;
        }
      }

      const XStorageXFileTypeOneOfTypes: Array<typeof XStorageTFileUnknown | typeof XStorageTFilePartial | typeof XStorageTFileJpeg | typeof XStorageTFileGif | typeof XStorageTFilePng | typeof XStorageTFilePdf | typeof XStorageTFileMp3 | typeof XStorageTFileMov | typeof XStorageTFileMp4 | typeof XStorageTFileWebp> = [XStorageTFileUnknown, XStorageTFilePartial, XStorageTFileJpeg, XStorageTFileGif, XStorageTFilePng, XStorageTFilePdf, XStorageTFileMp3, XStorageTFileMov, XStorageTFileMp4, XStorageTFileWebp];
      export class XStorageXFileType extends OneOf<typeof XStorageTFileUnknown | typeof XStorageTFilePartial | typeof XStorageTFileJpeg | typeof XStorageTFileGif | typeof XStorageTFilePng | typeof XStorageTFilePdf | typeof XStorageTFileMp3 | typeof XStorageTFileMov | typeof XStorageTFileMp4 | typeof XStorageTFileWebp, XStorageTFileUnknown | XStorageTFilePartial | XStorageTFileJpeg | XStorageTFileGif | XStorageTFilePng | XStorageTFilePdf | XStorageTFileMp3 | XStorageTFileMov | XStorageTFileMp4 | XStorageTFileWebp> {
        getTypes() {
          return XStorageXFileTypeOneOfTypes;
        }
      }

      const TUserOneOfTypes: Array<typeof XUserEmpty | typeof XUser> = [XUserEmpty, XUser];
      export class TUser extends OneOf<typeof XUserEmpty | typeof XUser, XUserEmpty | XUser> {
        getTypes() {
          return TUserOneOfTypes;
        }
      }

      const TUserProfilePhotoOneOfTypes: Array<typeof XUserProfilePhotoEmpty | typeof XUserProfilePhoto> = [XUserProfilePhotoEmpty, XUserProfilePhoto];
      export class TUserProfilePhoto extends OneOf<typeof XUserProfilePhotoEmpty | typeof XUserProfilePhoto, XUserProfilePhotoEmpty | XUserProfilePhoto> {
        getTypes() {
          return TUserProfilePhotoOneOfTypes;
        }
      }

      const TUserStatusOneOfTypes: Array<typeof XUserStatusEmpty | typeof XUserStatusOnline | typeof XUserStatusOffline | typeof XUserStatusRecently | typeof XUserStatusLastWeek | typeof XUserStatusLastMonth> = [XUserStatusEmpty, XUserStatusOnline, XUserStatusOffline, XUserStatusRecently, XUserStatusLastWeek, XUserStatusLastMonth];
      export class TUserStatus extends OneOf<typeof XUserStatusEmpty | typeof XUserStatusOnline | typeof XUserStatusOffline | typeof XUserStatusRecently | typeof XUserStatusLastWeek | typeof XUserStatusLastMonth, XUserStatusEmpty | XUserStatusOnline | XUserStatusOffline | XUserStatusRecently | XUserStatusLastWeek | XUserStatusLastMonth> {
        getTypes() {
          return TUserStatusOneOfTypes;
        }
      }

      const TChatOneOfTypes: Array<typeof XChatEmpty | typeof XChat | typeof XChatForbidden | typeof XChannel | typeof XChannelForbidden> = [XChatEmpty, XChat, XChatForbidden, XChannel, XChannelForbidden];
      export class TChat extends OneOf<typeof XChatEmpty | typeof XChat | typeof XChatForbidden | typeof XChannel | typeof XChannelForbidden, XChatEmpty | XChat | XChatForbidden | XChannel | XChannelForbidden> {
        getTypes() {
          return TChatOneOfTypes;
        }
      }

      const TChatFullOneOfTypes: Array<typeof XChatFull | typeof XChannelFull> = [XChatFull, XChannelFull];
      export class TChatFull extends OneOf<typeof XChatFull | typeof XChannelFull, XChatFull | XChannelFull> {
        getTypes() {
          return TChatFullOneOfTypes;
        }
      }

      const TChatParticipantOneOfTypes: Array<typeof XChatParticipant | typeof XChatParticipantCreator | typeof XChatParticipantAdmin> = [XChatParticipant, XChatParticipantCreator, XChatParticipantAdmin];
      export class TChatParticipant extends OneOf<typeof XChatParticipant | typeof XChatParticipantCreator | typeof XChatParticipantAdmin, XChatParticipant | XChatParticipantCreator | XChatParticipantAdmin> {
        getTypes() {
          return TChatParticipantOneOfTypes;
        }
      }

      const TChatParticipantsOneOfTypes: Array<typeof XChatParticipantsForbidden | typeof XChatParticipants> = [XChatParticipantsForbidden, XChatParticipants];
      export class TChatParticipants extends OneOf<typeof XChatParticipantsForbidden | typeof XChatParticipants, XChatParticipantsForbidden | XChatParticipants> {
        getTypes() {
          return TChatParticipantsOneOfTypes;
        }
      }

      const TChatPhotoOneOfTypes: Array<typeof XChatPhotoEmpty | typeof XChatPhoto> = [XChatPhotoEmpty, XChatPhoto];
      export class TChatPhoto extends OneOf<typeof XChatPhotoEmpty | typeof XChatPhoto, XChatPhotoEmpty | XChatPhoto> {
        getTypes() {
          return TChatPhotoOneOfTypes;
        }
      }

      const TMessageOneOfTypes: Array<typeof XMessageEmpty | typeof XMessage | typeof XMessageService | typeof XMessage> = [XMessageEmpty, XMessage, XMessageService, XMessage];
      export class TMessage extends OneOf<typeof XMessageEmpty | typeof XMessage | typeof XMessageService | typeof XMessage, XMessageEmpty | XMessage | XMessageService | XMessage> {
        getTypes() {
          return TMessageOneOfTypes;
        }
      }

      const TMessageMediaOneOfTypes: Array<typeof XMessageMediaEmpty | typeof XMessageMediaPhoto | typeof XMessageMediaGeo | typeof XMessageMediaContact | typeof XMessageMediaUnsupported | typeof XMessageMediaDocument | typeof XMessageMediaWebPage | typeof XMessageMediaVenue | typeof XMessageMediaGame | typeof XMessageMediaInvoice | typeof XMessageMediaGeoLive | typeof XMessageMediaPoll> = [XMessageMediaEmpty, XMessageMediaPhoto, XMessageMediaGeo, XMessageMediaContact, XMessageMediaUnsupported, XMessageMediaDocument, XMessageMediaWebPage, XMessageMediaVenue, XMessageMediaGame, XMessageMediaInvoice, XMessageMediaGeoLive, XMessageMediaPoll];
      export class TMessageMedia extends OneOf<typeof XMessageMediaEmpty | typeof XMessageMediaPhoto | typeof XMessageMediaGeo | typeof XMessageMediaContact | typeof XMessageMediaUnsupported | typeof XMessageMediaDocument | typeof XMessageMediaWebPage | typeof XMessageMediaVenue | typeof XMessageMediaGame | typeof XMessageMediaInvoice | typeof XMessageMediaGeoLive | typeof XMessageMediaPoll, XMessageMediaEmpty | XMessageMediaPhoto | XMessageMediaGeo | XMessageMediaContact | XMessageMediaUnsupported | XMessageMediaDocument | XMessageMediaWebPage | XMessageMediaVenue | XMessageMediaGame | XMessageMediaInvoice | XMessageMediaGeoLive | XMessageMediaPoll> {
        getTypes() {
          return TMessageMediaOneOfTypes;
        }
      }

      const TMessageActionOneOfTypes: Array<typeof XMessageActionEmpty | typeof XMessageActionChatCreate | typeof XMessageActionChatEditTitle | typeof XMessageActionChatEditPhoto | typeof XMessageActionChatDeletePhoto | typeof XMessageActionChatAddUser | typeof XMessageActionChatDeleteUser | typeof XMessageActionChatJoinedByLink | typeof XMessageActionChannelCreate | typeof XMessageActionChatMigrateTo | typeof XMessageActionChannelMigrateFrom | typeof XMessageActionPinMessage | typeof XMessageActionHistoryClear | typeof XMessageActionGameScore | typeof XMessageActionPaymentSentMe | typeof XMessageActionPaymentSent | typeof XMessageActionPhoneCall | typeof XMessageActionScreenshotTaken | typeof XMessageActionCustomAction | typeof XMessageActionBotAllowed | typeof XMessageActionSecureValuesSentMe | typeof XMessageActionSecureValuesSent | typeof XMessageActionContactSignUp> = [XMessageActionEmpty, XMessageActionChatCreate, XMessageActionChatEditTitle, XMessageActionChatEditPhoto, XMessageActionChatDeletePhoto, XMessageActionChatAddUser, XMessageActionChatDeleteUser, XMessageActionChatJoinedByLink, XMessageActionChannelCreate, XMessageActionChatMigrateTo, XMessageActionChannelMigrateFrom, XMessageActionPinMessage, XMessageActionHistoryClear, XMessageActionGameScore, XMessageActionPaymentSentMe, XMessageActionPaymentSent, XMessageActionPhoneCall, XMessageActionScreenshotTaken, XMessageActionCustomAction, XMessageActionBotAllowed, XMessageActionSecureValuesSentMe, XMessageActionSecureValuesSent, XMessageActionContactSignUp];
      export class TMessageAction extends OneOf<typeof XMessageActionEmpty | typeof XMessageActionChatCreate | typeof XMessageActionChatEditTitle | typeof XMessageActionChatEditPhoto | typeof XMessageActionChatDeletePhoto | typeof XMessageActionChatAddUser | typeof XMessageActionChatDeleteUser | typeof XMessageActionChatJoinedByLink | typeof XMessageActionChannelCreate | typeof XMessageActionChatMigrateTo | typeof XMessageActionChannelMigrateFrom | typeof XMessageActionPinMessage | typeof XMessageActionHistoryClear | typeof XMessageActionGameScore | typeof XMessageActionPaymentSentMe | typeof XMessageActionPaymentSent | typeof XMessageActionPhoneCall | typeof XMessageActionScreenshotTaken | typeof XMessageActionCustomAction | typeof XMessageActionBotAllowed | typeof XMessageActionSecureValuesSentMe | typeof XMessageActionSecureValuesSent | typeof XMessageActionContactSignUp, XMessageActionEmpty | XMessageActionChatCreate | XMessageActionChatEditTitle | XMessageActionChatEditPhoto | XMessageActionChatDeletePhoto | XMessageActionChatAddUser | XMessageActionChatDeleteUser | XMessageActionChatJoinedByLink | XMessageActionChannelCreate | XMessageActionChatMigrateTo | XMessageActionChannelMigrateFrom | XMessageActionPinMessage | XMessageActionHistoryClear | XMessageActionGameScore | XMessageActionPaymentSentMe | XMessageActionPaymentSent | XMessageActionPhoneCall | XMessageActionScreenshotTaken | XMessageActionCustomAction | XMessageActionBotAllowed | XMessageActionSecureValuesSentMe | XMessageActionSecureValuesSent | XMessageActionContactSignUp> {
        getTypes() {
          return TMessageActionOneOfTypes;
        }
      }

      const TDialogOneOfTypes: Array<typeof XDialog | typeof XDialogFolder> = [XDialog, XDialogFolder];
      export class TDialog extends OneOf<typeof XDialog | typeof XDialogFolder, XDialog | XDialogFolder> {
        getTypes() {
          return TDialogOneOfTypes;
        }
      }

      const TPhotoOneOfTypes: Array<typeof XPhotoEmpty | typeof XPhoto> = [XPhotoEmpty, XPhoto];
      export class TPhoto extends OneOf<typeof XPhotoEmpty | typeof XPhoto, XPhotoEmpty | XPhoto> {
        getTypes() {
          return TPhotoOneOfTypes;
        }
      }

      const TPhotoSizeOneOfTypes: Array<typeof XPhotoSizeEmpty | typeof XPhotoSize | typeof XPhotoCachedSize | typeof XPhotoStrippedSize> = [XPhotoSizeEmpty, XPhotoSize, XPhotoCachedSize, XPhotoStrippedSize];
      export class TPhotoSize extends OneOf<typeof XPhotoSizeEmpty | typeof XPhotoSize | typeof XPhotoCachedSize | typeof XPhotoStrippedSize, XPhotoSizeEmpty | XPhotoSize | XPhotoCachedSize | XPhotoStrippedSize> {
        getTypes() {
          return TPhotoSizeOneOfTypes;
        }
      }

      const TGeoPointOneOfTypes: Array<typeof XGeoPointEmpty | typeof XGeoPoint> = [XGeoPointEmpty, XGeoPoint];
      export class TGeoPoint extends OneOf<typeof XGeoPointEmpty | typeof XGeoPoint, XGeoPointEmpty | XGeoPoint> {
        getTypes() {
          return TGeoPointOneOfTypes;
        }
      }
export class XAuthXSentCode extends XAuthTSentCode {
      }

      const XAuthXAuthorizationOneOfTypes: Array<typeof XAuthTAuthorization | typeof XAuthTAuthorizationSignUpRequired> = [XAuthTAuthorization, XAuthTAuthorizationSignUpRequired];
      export class XAuthXAuthorization extends OneOf<typeof XAuthTAuthorization | typeof XAuthTAuthorizationSignUpRequired, XAuthTAuthorization | XAuthTAuthorizationSignUpRequired> {
        getTypes() {
          return XAuthXAuthorizationOneOfTypes;
        }
      }
export class XAuthXExportedAuthorization extends XAuthTExportedAuthorization {
      }

      const TInputNotifyPeerOneOfTypes: Array<typeof XInputNotifyPeer | typeof XInputNotifyUsers | typeof XInputNotifyChats | typeof XInputNotifyBroadcasts> = [XInputNotifyPeer, XInputNotifyUsers, XInputNotifyChats, XInputNotifyBroadcasts];
      export class TInputNotifyPeer extends OneOf<typeof XInputNotifyPeer | typeof XInputNotifyUsers | typeof XInputNotifyChats | typeof XInputNotifyBroadcasts, XInputNotifyPeer | XInputNotifyUsers | XInputNotifyChats | XInputNotifyBroadcasts> {
        getTypes() {
          return TInputNotifyPeerOneOfTypes;
        }
      }
export class TInputPeerNotifySettings extends XInputPeerNotifySettings {
      }
export class TPeerNotifySettings extends XPeerNotifySettings {
      }
export class TPeerSettings extends XPeerSettings {
      }
export class TWallPaper extends XWallPaper {
      }

      const TReportReasonOneOfTypes: Array<typeof XInputReportReasonSpam | typeof XInputReportReasonViolence | typeof XInputReportReasonPornography | typeof XInputReportReasonChildAbuse | typeof XInputReportReasonOther | typeof XInputReportReasonCopyright | typeof XInputReportReasonGeoIrrelevant> = [XInputReportReasonSpam, XInputReportReasonViolence, XInputReportReasonPornography, XInputReportReasonChildAbuse, XInputReportReasonOther, XInputReportReasonCopyright, XInputReportReasonGeoIrrelevant];
      export class TReportReason extends OneOf<typeof XInputReportReasonSpam | typeof XInputReportReasonViolence | typeof XInputReportReasonPornography | typeof XInputReportReasonChildAbuse | typeof XInputReportReasonOther | typeof XInputReportReasonCopyright | typeof XInputReportReasonGeoIrrelevant, XInputReportReasonSpam | XInputReportReasonViolence | XInputReportReasonPornography | XInputReportReasonChildAbuse | XInputReportReasonOther | XInputReportReasonCopyright | XInputReportReasonGeoIrrelevant> {
        getTypes() {
          return TReportReasonOneOfTypes;
        }
      }
export class TUserFull extends XUserFull {
      }
export class TContact extends XContact {
      }
export class TImportedContact extends XImportedContact {
      }
export class TContactBlocked extends XContactBlocked {
      }
export class TContactStatus extends XContactStatus {
      }

      const XContactsXContactsOneOfTypes: Array<typeof XContactsTContactsNotModified | typeof XContactsTContacts> = [XContactsTContactsNotModified, XContactsTContacts];
      export class XContactsXContacts extends OneOf<typeof XContactsTContactsNotModified | typeof XContactsTContacts, XContactsTContactsNotModified | XContactsTContacts> {
        getTypes() {
          return XContactsXContactsOneOfTypes;
        }
      }
export class XContactsXImportedContacts extends XContactsTImportedContacts {
      }

      const XContactsXBlockedOneOfTypes: Array<typeof XContactsTBlocked | typeof XContactsTBlockedSlice> = [XContactsTBlocked, XContactsTBlockedSlice];
      export class XContactsXBlocked extends OneOf<typeof XContactsTBlocked | typeof XContactsTBlockedSlice, XContactsTBlocked | XContactsTBlockedSlice> {
        getTypes() {
          return XContactsXBlockedOneOfTypes;
        }
      }

      const XMessagesXDialogsOneOfTypes: Array<typeof XMessagesTDialogs | typeof XMessagesTDialogsSlice | typeof XMessagesTDialogsNotModified> = [XMessagesTDialogs, XMessagesTDialogsSlice, XMessagesTDialogsNotModified];
      export class XMessagesXDialogs extends OneOf<typeof XMessagesTDialogs | typeof XMessagesTDialogsSlice | typeof XMessagesTDialogsNotModified, XMessagesTDialogs | XMessagesTDialogsSlice | XMessagesTDialogsNotModified> {
        getTypes() {
          return XMessagesXDialogsOneOfTypes;
        }
      }

      const XMessagesXMessagesOneOfTypes: Array<typeof XMessagesTMessages | typeof XMessagesTMessagesSlice | typeof XMessagesTChannelMessages | typeof XMessagesTMessagesNotModified> = [XMessagesTMessages, XMessagesTMessagesSlice, XMessagesTChannelMessages, XMessagesTMessagesNotModified];
      export class XMessagesXMessages extends OneOf<typeof XMessagesTMessages | typeof XMessagesTMessagesSlice | typeof XMessagesTChannelMessages | typeof XMessagesTMessagesNotModified, XMessagesTMessages | XMessagesTMessagesSlice | XMessagesTChannelMessages | XMessagesTMessagesNotModified> {
        getTypes() {
          return XMessagesXMessagesOneOfTypes;
        }
      }

      const XMessagesXChatsOneOfTypes: Array<typeof XMessagesTChats | typeof XMessagesTChatsSlice> = [XMessagesTChats, XMessagesTChatsSlice];
      export class XMessagesXChats extends OneOf<typeof XMessagesTChats | typeof XMessagesTChatsSlice, XMessagesTChats | XMessagesTChatsSlice> {
        getTypes() {
          return XMessagesXChatsOneOfTypes;
        }
      }
export class XMessagesXChatFull extends XMessagesTChatFull {
      }
export class XMessagesXAffectedHistory extends XMessagesTAffectedHistory {
      }

      const TMessagesFilterOneOfTypes: Array<typeof XInputMessagesFilterEmpty | typeof XInputMessagesFilterPhotos | typeof XInputMessagesFilterVideo | typeof XInputMessagesFilterPhotoVideo | typeof XInputMessagesFilterDocument | typeof XInputMessagesFilterUrl | typeof XInputMessagesFilterGif | typeof XInputMessagesFilterVoice | typeof XInputMessagesFilterMusic | typeof XInputMessagesFilterChatPhotos | typeof XInputMessagesFilterPhoneCalls | typeof XInputMessagesFilterRoundVoice | typeof XInputMessagesFilterRoundVideo | typeof XInputMessagesFilterMyMentions | typeof XInputMessagesFilterGeo | typeof XInputMessagesFilterContacts> = [XInputMessagesFilterEmpty, XInputMessagesFilterPhotos, XInputMessagesFilterVideo, XInputMessagesFilterPhotoVideo, XInputMessagesFilterDocument, XInputMessagesFilterUrl, XInputMessagesFilterGif, XInputMessagesFilterVoice, XInputMessagesFilterMusic, XInputMessagesFilterChatPhotos, XInputMessagesFilterPhoneCalls, XInputMessagesFilterRoundVoice, XInputMessagesFilterRoundVideo, XInputMessagesFilterMyMentions, XInputMessagesFilterGeo, XInputMessagesFilterContacts];
      export class TMessagesFilter extends OneOf<typeof XInputMessagesFilterEmpty | typeof XInputMessagesFilterPhotos | typeof XInputMessagesFilterVideo | typeof XInputMessagesFilterPhotoVideo | typeof XInputMessagesFilterDocument | typeof XInputMessagesFilterUrl | typeof XInputMessagesFilterGif | typeof XInputMessagesFilterVoice | typeof XInputMessagesFilterMusic | typeof XInputMessagesFilterChatPhotos | typeof XInputMessagesFilterPhoneCalls | typeof XInputMessagesFilterRoundVoice | typeof XInputMessagesFilterRoundVideo | typeof XInputMessagesFilterMyMentions | typeof XInputMessagesFilterGeo | typeof XInputMessagesFilterContacts, XInputMessagesFilterEmpty | XInputMessagesFilterPhotos | XInputMessagesFilterVideo | XInputMessagesFilterPhotoVideo | XInputMessagesFilterDocument | XInputMessagesFilterUrl | XInputMessagesFilterGif | XInputMessagesFilterVoice | XInputMessagesFilterMusic | XInputMessagesFilterChatPhotos | XInputMessagesFilterPhoneCalls | XInputMessagesFilterRoundVoice | XInputMessagesFilterRoundVideo | XInputMessagesFilterMyMentions | XInputMessagesFilterGeo | XInputMessagesFilterContacts> {
        getTypes() {
          return TMessagesFilterOneOfTypes;
        }
      }

      const TUpdateOneOfTypes: Array<typeof XUpdateNewMessage | typeof XUpdateMessageId | typeof XUpdateDeleteMessages | typeof XUpdateUserTyping | typeof XUpdateChatUserTyping | typeof XUpdateChatParticipants | typeof XUpdateUserStatus | typeof XUpdateUserName | typeof XUpdateUserPhoto | typeof XUpdateNewEncryptedMessage | typeof XUpdateEncryptedChatTyping | typeof XUpdateEncryption | typeof XUpdateEncryptedMessagesRead | typeof XUpdateChatParticipantAdd | typeof XUpdateChatParticipantDelete | typeof XUpdateDcOptions | typeof XUpdateUserBlocked | typeof XUpdateNotifySettings | typeof XUpdateServiceNotification | typeof XUpdatePrivacy | typeof XUpdateUserPhone | typeof XUpdateReadHistoryInbox | typeof XUpdateReadHistoryOutbox | typeof XUpdateWebPage | typeof XUpdateReadMessagesContents | typeof XUpdateChannelTooLong | typeof XUpdateChannel | typeof XUpdateNewChannelMessage | typeof XUpdateReadChannelInbox | typeof XUpdateDeleteChannelMessages | typeof XUpdateChannelMessageViews | typeof XUpdateChatParticipantAdmin | typeof XUpdateNewStickerSet | typeof XUpdateStickerSetsOrder | typeof XUpdateStickerSets | typeof XUpdateSavedGifs | typeof XUpdateBotInlineQuery | typeof XUpdateBotInlineSend | typeof XUpdateEditChannelMessage | typeof XUpdateChannelPinnedMessage | typeof XUpdateBotCallbackQuery | typeof XUpdateEditMessage | typeof XUpdateInlineBotCallbackQuery | typeof XUpdateReadChannelOutbox | typeof XUpdateDraftMessage | typeof XUpdateReadFeaturedStickers | typeof XUpdateRecentStickers | typeof XUpdateConfig | typeof XUpdatePtsChanged | typeof XUpdateChannelWebPage | typeof XUpdateDialogPinned | typeof XUpdatePinnedDialogs | typeof XUpdateBotWebhookJson | typeof XUpdateBotWebhookJsonQuery | typeof XUpdateBotShippingQuery | typeof XUpdateBotPrecheckoutQuery | typeof XUpdatePhoneCall | typeof XUpdateLangPackTooLong | typeof XUpdateLangPack | typeof XUpdateFavedStickers | typeof XUpdateChannelReadMessagesContents | typeof XUpdateContactsReset | typeof XUpdateChannelAvailableMessages | typeof XUpdateDialogUnreadMark | typeof XUpdateUserPinnedMessage | typeof XUpdateChatPinnedMessage | typeof XUpdateMessagePoll | typeof XUpdateChatDefaultBannedRights | typeof XUpdateFolderPeers | typeof XUpdatePeerSettings | typeof XUpdatePeerLocated | typeof XUpdateNewScheduledMessage | typeof XUpdateDeleteScheduledMessages | typeof XUpdateTheme> = [XUpdateNewMessage, XUpdateMessageId, XUpdateDeleteMessages, XUpdateUserTyping, XUpdateChatUserTyping, XUpdateChatParticipants, XUpdateUserStatus, XUpdateUserName, XUpdateUserPhoto, XUpdateNewEncryptedMessage, XUpdateEncryptedChatTyping, XUpdateEncryption, XUpdateEncryptedMessagesRead, XUpdateChatParticipantAdd, XUpdateChatParticipantDelete, XUpdateDcOptions, XUpdateUserBlocked, XUpdateNotifySettings, XUpdateServiceNotification, XUpdatePrivacy, XUpdateUserPhone, XUpdateReadHistoryInbox, XUpdateReadHistoryOutbox, XUpdateWebPage, XUpdateReadMessagesContents, XUpdateChannelTooLong, XUpdateChannel, XUpdateNewChannelMessage, XUpdateReadChannelInbox, XUpdateDeleteChannelMessages, XUpdateChannelMessageViews, XUpdateChatParticipantAdmin, XUpdateNewStickerSet, XUpdateStickerSetsOrder, XUpdateStickerSets, XUpdateSavedGifs, XUpdateBotInlineQuery, XUpdateBotInlineSend, XUpdateEditChannelMessage, XUpdateChannelPinnedMessage, XUpdateBotCallbackQuery, XUpdateEditMessage, XUpdateInlineBotCallbackQuery, XUpdateReadChannelOutbox, XUpdateDraftMessage, XUpdateReadFeaturedStickers, XUpdateRecentStickers, XUpdateConfig, XUpdatePtsChanged, XUpdateChannelWebPage, XUpdateDialogPinned, XUpdatePinnedDialogs, XUpdateBotWebhookJson, XUpdateBotWebhookJsonQuery, XUpdateBotShippingQuery, XUpdateBotPrecheckoutQuery, XUpdatePhoneCall, XUpdateLangPackTooLong, XUpdateLangPack, XUpdateFavedStickers, XUpdateChannelReadMessagesContents, XUpdateContactsReset, XUpdateChannelAvailableMessages, XUpdateDialogUnreadMark, XUpdateUserPinnedMessage, XUpdateChatPinnedMessage, XUpdateMessagePoll, XUpdateChatDefaultBannedRights, XUpdateFolderPeers, XUpdatePeerSettings, XUpdatePeerLocated, XUpdateNewScheduledMessage, XUpdateDeleteScheduledMessages, XUpdateTheme];
      export class TUpdate extends OneOf<typeof XUpdateNewMessage | typeof XUpdateMessageId | typeof XUpdateDeleteMessages | typeof XUpdateUserTyping | typeof XUpdateChatUserTyping | typeof XUpdateChatParticipants | typeof XUpdateUserStatus | typeof XUpdateUserName | typeof XUpdateUserPhoto | typeof XUpdateNewEncryptedMessage | typeof XUpdateEncryptedChatTyping | typeof XUpdateEncryption | typeof XUpdateEncryptedMessagesRead | typeof XUpdateChatParticipantAdd | typeof XUpdateChatParticipantDelete | typeof XUpdateDcOptions | typeof XUpdateUserBlocked | typeof XUpdateNotifySettings | typeof XUpdateServiceNotification | typeof XUpdatePrivacy | typeof XUpdateUserPhone | typeof XUpdateReadHistoryInbox | typeof XUpdateReadHistoryOutbox | typeof XUpdateWebPage | typeof XUpdateReadMessagesContents | typeof XUpdateChannelTooLong | typeof XUpdateChannel | typeof XUpdateNewChannelMessage | typeof XUpdateReadChannelInbox | typeof XUpdateDeleteChannelMessages | typeof XUpdateChannelMessageViews | typeof XUpdateChatParticipantAdmin | typeof XUpdateNewStickerSet | typeof XUpdateStickerSetsOrder | typeof XUpdateStickerSets | typeof XUpdateSavedGifs | typeof XUpdateBotInlineQuery | typeof XUpdateBotInlineSend | typeof XUpdateEditChannelMessage | typeof XUpdateChannelPinnedMessage | typeof XUpdateBotCallbackQuery | typeof XUpdateEditMessage | typeof XUpdateInlineBotCallbackQuery | typeof XUpdateReadChannelOutbox | typeof XUpdateDraftMessage | typeof XUpdateReadFeaturedStickers | typeof XUpdateRecentStickers | typeof XUpdateConfig | typeof XUpdatePtsChanged | typeof XUpdateChannelWebPage | typeof XUpdateDialogPinned | typeof XUpdatePinnedDialogs | typeof XUpdateBotWebhookJson | typeof XUpdateBotWebhookJsonQuery | typeof XUpdateBotShippingQuery | typeof XUpdateBotPrecheckoutQuery | typeof XUpdatePhoneCall | typeof XUpdateLangPackTooLong | typeof XUpdateLangPack | typeof XUpdateFavedStickers | typeof XUpdateChannelReadMessagesContents | typeof XUpdateContactsReset | typeof XUpdateChannelAvailableMessages | typeof XUpdateDialogUnreadMark | typeof XUpdateUserPinnedMessage | typeof XUpdateChatPinnedMessage | typeof XUpdateMessagePoll | typeof XUpdateChatDefaultBannedRights | typeof XUpdateFolderPeers | typeof XUpdatePeerSettings | typeof XUpdatePeerLocated | typeof XUpdateNewScheduledMessage | typeof XUpdateDeleteScheduledMessages | typeof XUpdateTheme, XUpdateNewMessage | XUpdateMessageId | XUpdateDeleteMessages | XUpdateUserTyping | XUpdateChatUserTyping | XUpdateChatParticipants | XUpdateUserStatus | XUpdateUserName | XUpdateUserPhoto | XUpdateNewEncryptedMessage | XUpdateEncryptedChatTyping | XUpdateEncryption | XUpdateEncryptedMessagesRead | XUpdateChatParticipantAdd | XUpdateChatParticipantDelete | XUpdateDcOptions | XUpdateUserBlocked | XUpdateNotifySettings | XUpdateServiceNotification | XUpdatePrivacy | XUpdateUserPhone | XUpdateReadHistoryInbox | XUpdateReadHistoryOutbox | XUpdateWebPage | XUpdateReadMessagesContents | XUpdateChannelTooLong | XUpdateChannel | XUpdateNewChannelMessage | XUpdateReadChannelInbox | XUpdateDeleteChannelMessages | XUpdateChannelMessageViews | XUpdateChatParticipantAdmin | XUpdateNewStickerSet | XUpdateStickerSetsOrder | XUpdateStickerSets | XUpdateSavedGifs | XUpdateBotInlineQuery | XUpdateBotInlineSend | XUpdateEditChannelMessage | XUpdateChannelPinnedMessage | XUpdateBotCallbackQuery | XUpdateEditMessage | XUpdateInlineBotCallbackQuery | XUpdateReadChannelOutbox | XUpdateDraftMessage | XUpdateReadFeaturedStickers | XUpdateRecentStickers | XUpdateConfig | XUpdatePtsChanged | XUpdateChannelWebPage | XUpdateDialogPinned | XUpdatePinnedDialogs | XUpdateBotWebhookJson | XUpdateBotWebhookJsonQuery | XUpdateBotShippingQuery | XUpdateBotPrecheckoutQuery | XUpdatePhoneCall | XUpdateLangPackTooLong | XUpdateLangPack | XUpdateFavedStickers | XUpdateChannelReadMessagesContents | XUpdateContactsReset | XUpdateChannelAvailableMessages | XUpdateDialogUnreadMark | XUpdateUserPinnedMessage | XUpdateChatPinnedMessage | XUpdateMessagePoll | XUpdateChatDefaultBannedRights | XUpdateFolderPeers | XUpdatePeerSettings | XUpdatePeerLocated | XUpdateNewScheduledMessage | XUpdateDeleteScheduledMessages | XUpdateTheme> {
        getTypes() {
          return TUpdateOneOfTypes;
        }
      }
export class XUpdatesXState extends XUpdatesTState {
      }

      const XUpdatesXDifferenceOneOfTypes: Array<typeof XUpdatesTDifferenceEmpty | typeof XUpdatesTDifference | typeof XUpdatesTDifferenceSlice | typeof XUpdatesTDifferenceTooLong> = [XUpdatesTDifferenceEmpty, XUpdatesTDifference, XUpdatesTDifferenceSlice, XUpdatesTDifferenceTooLong];
      export class XUpdatesXDifference extends OneOf<typeof XUpdatesTDifferenceEmpty | typeof XUpdatesTDifference | typeof XUpdatesTDifferenceSlice | typeof XUpdatesTDifferenceTooLong, XUpdatesTDifferenceEmpty | XUpdatesTDifference | XUpdatesTDifferenceSlice | XUpdatesTDifferenceTooLong> {
        getTypes() {
          return XUpdatesXDifferenceOneOfTypes;
        }
      }

      const TUpdatesOneOfTypes: Array<typeof XUpdatesTooLong | typeof XUpdateShortMessage | typeof XUpdateShortChatMessage | typeof XUpdateShort | typeof XUpdatesCombined | typeof XUpdates | typeof XUpdateShortSentMessage> = [XUpdatesTooLong, XUpdateShortMessage, XUpdateShortChatMessage, XUpdateShort, XUpdatesCombined, XUpdates, XUpdateShortSentMessage];
      export class TUpdates extends OneOf<typeof XUpdatesTooLong | typeof XUpdateShortMessage | typeof XUpdateShortChatMessage | typeof XUpdateShort | typeof XUpdatesCombined | typeof XUpdates | typeof XUpdateShortSentMessage, XUpdatesTooLong | XUpdateShortMessage | XUpdateShortChatMessage | XUpdateShort | XUpdatesCombined | XUpdates | XUpdateShortSentMessage> {
        getTypes() {
          return TUpdatesOneOfTypes;
        }
      }

      const XPhotosXPhotosOneOfTypes: Array<typeof XPhotosTPhotos | typeof XPhotosTPhotosSlice> = [XPhotosTPhotos, XPhotosTPhotosSlice];
      export class XPhotosXPhotos extends OneOf<typeof XPhotosTPhotos | typeof XPhotosTPhotosSlice, XPhotosTPhotos | XPhotosTPhotosSlice> {
        getTypes() {
          return XPhotosXPhotosOneOfTypes;
        }
      }
export class XPhotosXPhoto extends XPhotosTPhoto {
      }

      const XUploadXFileOneOfTypes: Array<typeof XUploadTFile | typeof XUploadTFileCdnRedirect> = [XUploadTFile, XUploadTFileCdnRedirect];
      export class XUploadXFile extends OneOf<typeof XUploadTFile | typeof XUploadTFileCdnRedirect, XUploadTFile | XUploadTFileCdnRedirect> {
        getTypes() {
          return XUploadXFileOneOfTypes;
        }
      }
export class TDcOption extends XDcOption {
      }
export class TConfig extends XConfig {
      }
export class TNearestDc extends XNearestDc {
      }

      const XHelpXAppUpdateOneOfTypes: Array<typeof XHelpTAppUpdate | typeof XHelpTNoAppUpdate> = [XHelpTAppUpdate, XHelpTNoAppUpdate];
      export class XHelpXAppUpdate extends OneOf<typeof XHelpTAppUpdate | typeof XHelpTNoAppUpdate, XHelpTAppUpdate | XHelpTNoAppUpdate> {
        getTypes() {
          return XHelpXAppUpdateOneOfTypes;
        }
      }
export class XHelpXInviteText extends XHelpTInviteText {
      }

      const TEncryptedChatOneOfTypes: Array<typeof XEncryptedChatEmpty | typeof XEncryptedChatWaiting | typeof XEncryptedChatRequested | typeof XEncryptedChat | typeof XEncryptedChatDiscarded> = [XEncryptedChatEmpty, XEncryptedChatWaiting, XEncryptedChatRequested, XEncryptedChat, XEncryptedChatDiscarded];
      export class TEncryptedChat extends OneOf<typeof XEncryptedChatEmpty | typeof XEncryptedChatWaiting | typeof XEncryptedChatRequested | typeof XEncryptedChat | typeof XEncryptedChatDiscarded, XEncryptedChatEmpty | XEncryptedChatWaiting | XEncryptedChatRequested | XEncryptedChat | XEncryptedChatDiscarded> {
        getTypes() {
          return TEncryptedChatOneOfTypes;
        }
      }
export class TInputEncryptedChat extends XInputEncryptedChat {
      }

      const TEncryptedFileOneOfTypes: Array<typeof XEncryptedFileEmpty | typeof XEncryptedFile> = [XEncryptedFileEmpty, XEncryptedFile];
      export class TEncryptedFile extends OneOf<typeof XEncryptedFileEmpty | typeof XEncryptedFile, XEncryptedFileEmpty | XEncryptedFile> {
        getTypes() {
          return TEncryptedFileOneOfTypes;
        }
      }

      const TInputEncryptedFileOneOfTypes: Array<typeof XInputEncryptedFileEmpty | typeof XInputEncryptedFileUploaded | typeof XInputEncryptedFile | typeof XInputEncryptedFileBigUploaded> = [XInputEncryptedFileEmpty, XInputEncryptedFileUploaded, XInputEncryptedFile, XInputEncryptedFileBigUploaded];
      export class TInputEncryptedFile extends OneOf<typeof XInputEncryptedFileEmpty | typeof XInputEncryptedFileUploaded | typeof XInputEncryptedFile | typeof XInputEncryptedFileBigUploaded, XInputEncryptedFileEmpty | XInputEncryptedFileUploaded | XInputEncryptedFile | XInputEncryptedFileBigUploaded> {
        getTypes() {
          return TInputEncryptedFileOneOfTypes;
        }
      }

      const TEncryptedMessageOneOfTypes: Array<typeof XEncryptedMessage | typeof XEncryptedMessageService> = [XEncryptedMessage, XEncryptedMessageService];
      export class TEncryptedMessage extends OneOf<typeof XEncryptedMessage | typeof XEncryptedMessageService, XEncryptedMessage | XEncryptedMessageService> {
        getTypes() {
          return TEncryptedMessageOneOfTypes;
        }
      }

      const XMessagesXDhConfigOneOfTypes: Array<typeof XMessagesTDhConfigNotModified | typeof XMessagesTDhConfig> = [XMessagesTDhConfigNotModified, XMessagesTDhConfig];
      export class XMessagesXDhConfig extends OneOf<typeof XMessagesTDhConfigNotModified | typeof XMessagesTDhConfig, XMessagesTDhConfigNotModified | XMessagesTDhConfig> {
        getTypes() {
          return XMessagesXDhConfigOneOfTypes;
        }
      }

      const XMessagesXSentEncryptedMessageOneOfTypes: Array<typeof XMessagesTSentEncryptedMessage | typeof XMessagesTSentEncryptedFile> = [XMessagesTSentEncryptedMessage, XMessagesTSentEncryptedFile];
      export class XMessagesXSentEncryptedMessage extends OneOf<typeof XMessagesTSentEncryptedMessage | typeof XMessagesTSentEncryptedFile, XMessagesTSentEncryptedMessage | XMessagesTSentEncryptedFile> {
        getTypes() {
          return XMessagesXSentEncryptedMessageOneOfTypes;
        }
      }

      const TInputDocumentOneOfTypes: Array<typeof XInputDocumentEmpty | typeof XInputDocument> = [XInputDocumentEmpty, XInputDocument];
      export class TInputDocument extends OneOf<typeof XInputDocumentEmpty | typeof XInputDocument, XInputDocumentEmpty | XInputDocument> {
        getTypes() {
          return TInputDocumentOneOfTypes;
        }
      }

      const TDocumentOneOfTypes: Array<typeof XDocumentEmpty | typeof XDocument> = [XDocumentEmpty, XDocument];
      export class TDocument extends OneOf<typeof XDocumentEmpty | typeof XDocument, XDocumentEmpty | XDocument> {
        getTypes() {
          return TDocumentOneOfTypes;
        }
      }
export class XHelpXSupport extends XHelpTSupport {
      }

      const TNotifyPeerOneOfTypes: Array<typeof XNotifyPeer | typeof XNotifyUsers | typeof XNotifyChats | typeof XNotifyBroadcasts> = [XNotifyPeer, XNotifyUsers, XNotifyChats, XNotifyBroadcasts];
      export class TNotifyPeer extends OneOf<typeof XNotifyPeer | typeof XNotifyUsers | typeof XNotifyChats | typeof XNotifyBroadcasts, XNotifyPeer | XNotifyUsers | XNotifyChats | XNotifyBroadcasts> {
        getTypes() {
          return TNotifyPeerOneOfTypes;
        }
      }

      const TSendMessageActionOneOfTypes: Array<typeof XSendMessageTypingAction | typeof XSendMessageCancelAction | typeof XSendMessageRecordVideoAction | typeof XSendMessageUploadVideoAction | typeof XSendMessageRecordAudioAction | typeof XSendMessageUploadAudioAction | typeof XSendMessageUploadPhotoAction | typeof XSendMessageUploadDocumentAction | typeof XSendMessageGeoLocationAction | typeof XSendMessageChooseContactAction | typeof XSendMessageGamePlayAction | typeof XSendMessageRecordRoundAction | typeof XSendMessageUploadRoundAction> = [XSendMessageTypingAction, XSendMessageCancelAction, XSendMessageRecordVideoAction, XSendMessageUploadVideoAction, XSendMessageRecordAudioAction, XSendMessageUploadAudioAction, XSendMessageUploadPhotoAction, XSendMessageUploadDocumentAction, XSendMessageGeoLocationAction, XSendMessageChooseContactAction, XSendMessageGamePlayAction, XSendMessageRecordRoundAction, XSendMessageUploadRoundAction];
      export class TSendMessageAction extends OneOf<typeof XSendMessageTypingAction | typeof XSendMessageCancelAction | typeof XSendMessageRecordVideoAction | typeof XSendMessageUploadVideoAction | typeof XSendMessageRecordAudioAction | typeof XSendMessageUploadAudioAction | typeof XSendMessageUploadPhotoAction | typeof XSendMessageUploadDocumentAction | typeof XSendMessageGeoLocationAction | typeof XSendMessageChooseContactAction | typeof XSendMessageGamePlayAction | typeof XSendMessageRecordRoundAction | typeof XSendMessageUploadRoundAction, XSendMessageTypingAction | XSendMessageCancelAction | XSendMessageRecordVideoAction | XSendMessageUploadVideoAction | XSendMessageRecordAudioAction | XSendMessageUploadAudioAction | XSendMessageUploadPhotoAction | XSendMessageUploadDocumentAction | XSendMessageGeoLocationAction | XSendMessageChooseContactAction | XSendMessageGamePlayAction | XSendMessageRecordRoundAction | XSendMessageUploadRoundAction> {
        getTypes() {
          return TSendMessageActionOneOfTypes;
        }
      }
export class XContactsXFound extends XContactsTFound {
      }

      const TInputPrivacyKeyOneOfTypes: Array<typeof XInputPrivacyKeyStatusTimestamp | typeof XInputPrivacyKeyChatInvite | typeof XInputPrivacyKeyPhoneCall | typeof XInputPrivacyKeyPhoneP2P | typeof XInputPrivacyKeyForwards | typeof XInputPrivacyKeyProfilePhoto | typeof XInputPrivacyKeyPhoneNumber | typeof XInputPrivacyKeyAddedByPhone> = [XInputPrivacyKeyStatusTimestamp, XInputPrivacyKeyChatInvite, XInputPrivacyKeyPhoneCall, XInputPrivacyKeyPhoneP2P, XInputPrivacyKeyForwards, XInputPrivacyKeyProfilePhoto, XInputPrivacyKeyPhoneNumber, XInputPrivacyKeyAddedByPhone];
      export class TInputPrivacyKey extends OneOf<typeof XInputPrivacyKeyStatusTimestamp | typeof XInputPrivacyKeyChatInvite | typeof XInputPrivacyKeyPhoneCall | typeof XInputPrivacyKeyPhoneP2P | typeof XInputPrivacyKeyForwards | typeof XInputPrivacyKeyProfilePhoto | typeof XInputPrivacyKeyPhoneNumber | typeof XInputPrivacyKeyAddedByPhone, XInputPrivacyKeyStatusTimestamp | XInputPrivacyKeyChatInvite | XInputPrivacyKeyPhoneCall | XInputPrivacyKeyPhoneP2P | XInputPrivacyKeyForwards | XInputPrivacyKeyProfilePhoto | XInputPrivacyKeyPhoneNumber | XInputPrivacyKeyAddedByPhone> {
        getTypes() {
          return TInputPrivacyKeyOneOfTypes;
        }
      }

      const TPrivacyKeyOneOfTypes: Array<typeof XPrivacyKeyStatusTimestamp | typeof XPrivacyKeyChatInvite | typeof XPrivacyKeyPhoneCall | typeof XPrivacyKeyPhoneP2P | typeof XPrivacyKeyForwards | typeof XPrivacyKeyProfilePhoto | typeof XPrivacyKeyPhoneNumber | typeof XPrivacyKeyAddedByPhone> = [XPrivacyKeyStatusTimestamp, XPrivacyKeyChatInvite, XPrivacyKeyPhoneCall, XPrivacyKeyPhoneP2P, XPrivacyKeyForwards, XPrivacyKeyProfilePhoto, XPrivacyKeyPhoneNumber, XPrivacyKeyAddedByPhone];
      export class TPrivacyKey extends OneOf<typeof XPrivacyKeyStatusTimestamp | typeof XPrivacyKeyChatInvite | typeof XPrivacyKeyPhoneCall | typeof XPrivacyKeyPhoneP2P | typeof XPrivacyKeyForwards | typeof XPrivacyKeyProfilePhoto | typeof XPrivacyKeyPhoneNumber | typeof XPrivacyKeyAddedByPhone, XPrivacyKeyStatusTimestamp | XPrivacyKeyChatInvite | XPrivacyKeyPhoneCall | XPrivacyKeyPhoneP2P | XPrivacyKeyForwards | XPrivacyKeyProfilePhoto | XPrivacyKeyPhoneNumber | XPrivacyKeyAddedByPhone> {
        getTypes() {
          return TPrivacyKeyOneOfTypes;
        }
      }

      const TInputPrivacyRuleOneOfTypes: Array<typeof XInputPrivacyValueAllowContacts | typeof XInputPrivacyValueAllowAll | typeof XInputPrivacyValueAllowUsers | typeof XInputPrivacyValueDisallowContacts | typeof XInputPrivacyValueDisallowAll | typeof XInputPrivacyValueDisallowUsers | typeof XInputPrivacyValueAllowChatParticipants | typeof XInputPrivacyValueDisallowChatParticipants> = [XInputPrivacyValueAllowContacts, XInputPrivacyValueAllowAll, XInputPrivacyValueAllowUsers, XInputPrivacyValueDisallowContacts, XInputPrivacyValueDisallowAll, XInputPrivacyValueDisallowUsers, XInputPrivacyValueAllowChatParticipants, XInputPrivacyValueDisallowChatParticipants];
      export class TInputPrivacyRule extends OneOf<typeof XInputPrivacyValueAllowContacts | typeof XInputPrivacyValueAllowAll | typeof XInputPrivacyValueAllowUsers | typeof XInputPrivacyValueDisallowContacts | typeof XInputPrivacyValueDisallowAll | typeof XInputPrivacyValueDisallowUsers | typeof XInputPrivacyValueAllowChatParticipants | typeof XInputPrivacyValueDisallowChatParticipants, XInputPrivacyValueAllowContacts | XInputPrivacyValueAllowAll | XInputPrivacyValueAllowUsers | XInputPrivacyValueDisallowContacts | XInputPrivacyValueDisallowAll | XInputPrivacyValueDisallowUsers | XInputPrivacyValueAllowChatParticipants | XInputPrivacyValueDisallowChatParticipants> {
        getTypes() {
          return TInputPrivacyRuleOneOfTypes;
        }
      }

      const TPrivacyRuleOneOfTypes: Array<typeof XPrivacyValueAllowContacts | typeof XPrivacyValueAllowAll | typeof XPrivacyValueAllowUsers | typeof XPrivacyValueDisallowContacts | typeof XPrivacyValueDisallowAll | typeof XPrivacyValueDisallowUsers | typeof XPrivacyValueAllowChatParticipants | typeof XPrivacyValueDisallowChatParticipants> = [XPrivacyValueAllowContacts, XPrivacyValueAllowAll, XPrivacyValueAllowUsers, XPrivacyValueDisallowContacts, XPrivacyValueDisallowAll, XPrivacyValueDisallowUsers, XPrivacyValueAllowChatParticipants, XPrivacyValueDisallowChatParticipants];
      export class TPrivacyRule extends OneOf<typeof XPrivacyValueAllowContacts | typeof XPrivacyValueAllowAll | typeof XPrivacyValueAllowUsers | typeof XPrivacyValueDisallowContacts | typeof XPrivacyValueDisallowAll | typeof XPrivacyValueDisallowUsers | typeof XPrivacyValueAllowChatParticipants | typeof XPrivacyValueDisallowChatParticipants, XPrivacyValueAllowContacts | XPrivacyValueAllowAll | XPrivacyValueAllowUsers | XPrivacyValueDisallowContacts | XPrivacyValueDisallowAll | XPrivacyValueDisallowUsers | XPrivacyValueAllowChatParticipants | XPrivacyValueDisallowChatParticipants> {
        getTypes() {
          return TPrivacyRuleOneOfTypes;
        }
      }
export class XAccountXPrivacyRules extends XAccountTPrivacyRules {
      }
export class TAccountDaysTtl extends XAccountDaysTtl {
      }

      const TDocumentAttributeOneOfTypes: Array<typeof XDocumentAttributeImageSize | typeof XDocumentAttributeAnimated | typeof XDocumentAttributeSticker | typeof XDocumentAttributeVideo | typeof XDocumentAttributeAudio | typeof XDocumentAttributeFilename | typeof XDocumentAttributeHasStickers> = [XDocumentAttributeImageSize, XDocumentAttributeAnimated, XDocumentAttributeSticker, XDocumentAttributeVideo, XDocumentAttributeAudio, XDocumentAttributeFilename, XDocumentAttributeHasStickers];
      export class TDocumentAttribute extends OneOf<typeof XDocumentAttributeImageSize | typeof XDocumentAttributeAnimated | typeof XDocumentAttributeSticker | typeof XDocumentAttributeVideo | typeof XDocumentAttributeAudio | typeof XDocumentAttributeFilename | typeof XDocumentAttributeHasStickers, XDocumentAttributeImageSize | XDocumentAttributeAnimated | XDocumentAttributeSticker | XDocumentAttributeVideo | XDocumentAttributeAudio | XDocumentAttributeFilename | XDocumentAttributeHasStickers> {
        getTypes() {
          return TDocumentAttributeOneOfTypes;
        }
      }

      const XMessagesXStickersOneOfTypes: Array<typeof XMessagesTStickersNotModified | typeof XMessagesTStickers> = [XMessagesTStickersNotModified, XMessagesTStickers];
      export class XMessagesXStickers extends OneOf<typeof XMessagesTStickersNotModified | typeof XMessagesTStickers, XMessagesTStickersNotModified | XMessagesTStickers> {
        getTypes() {
          return XMessagesXStickersOneOfTypes;
        }
      }
export class TStickerPack extends XStickerPack {
      }

      const XMessagesXAllStickersOneOfTypes: Array<typeof XMessagesTAllStickersNotModified | typeof XMessagesTAllStickers> = [XMessagesTAllStickersNotModified, XMessagesTAllStickers];
      export class XMessagesXAllStickers extends OneOf<typeof XMessagesTAllStickersNotModified | typeof XMessagesTAllStickers, XMessagesTAllStickersNotModified | XMessagesTAllStickers> {
        getTypes() {
          return XMessagesXAllStickersOneOfTypes;
        }
      }
export class XMessagesXAffectedMessages extends XMessagesTAffectedMessages {
      }

      const TWebPageOneOfTypes: Array<typeof XWebPageEmpty | typeof XWebPagePending | typeof XWebPage | typeof XWebPageNotModified> = [XWebPageEmpty, XWebPagePending, XWebPage, XWebPageNotModified];
      export class TWebPage extends OneOf<typeof XWebPageEmpty | typeof XWebPagePending | typeof XWebPage | typeof XWebPageNotModified, XWebPageEmpty | XWebPagePending | XWebPage | XWebPageNotModified> {
        getTypes() {
          return TWebPageOneOfTypes;
        }
      }
export class TAuthorization extends XAuthorization {
      }
export class XAccountXAuthorizations extends XAccountTAuthorizations {
      }
export class XAccountXPassword extends XAccountTPassword {
      }
export class XAccountXPasswordSettings extends XAccountTPasswordSettings {
      }
export class XAccountXPasswordInputSettings extends XAccountTPasswordInputSettings {
      }
export class XAuthXPasswordRecovery extends XAuthTPasswordRecovery {
      }
export class TReceivedNotifyMessage extends XReceivedNotifyMessage {
      }

      const TExportedChatInviteOneOfTypes: Array<typeof XChatInviteEmpty | typeof XChatInviteExported> = [XChatInviteEmpty, XChatInviteExported];
      export class TExportedChatInvite extends OneOf<typeof XChatInviteEmpty | typeof XChatInviteExported, XChatInviteEmpty | XChatInviteExported> {
        getTypes() {
          return TExportedChatInviteOneOfTypes;
        }
      }

      const TChatInviteOneOfTypes: Array<typeof XChatInviteAlready | typeof XChatInvite> = [XChatInviteAlready, XChatInvite];
      export class TChatInvite extends OneOf<typeof XChatInviteAlready | typeof XChatInvite, XChatInviteAlready | XChatInvite> {
        getTypes() {
          return TChatInviteOneOfTypes;
        }
      }

      const TInputStickerSetOneOfTypes: Array<typeof XInputStickerSetEmpty | typeof XInputStickerSetId | typeof XInputStickerSetShortName | typeof XInputStickerSetAnimatedEmoji> = [XInputStickerSetEmpty, XInputStickerSetId, XInputStickerSetShortName, XInputStickerSetAnimatedEmoji];
      export class TInputStickerSet extends OneOf<typeof XInputStickerSetEmpty | typeof XInputStickerSetId | typeof XInputStickerSetShortName | typeof XInputStickerSetAnimatedEmoji, XInputStickerSetEmpty | XInputStickerSetId | XInputStickerSetShortName | XInputStickerSetAnimatedEmoji> {
        getTypes() {
          return TInputStickerSetOneOfTypes;
        }
      }
export class TStickerSet extends XStickerSet {
      }
export class XMessagesXStickerSet extends XMessagesTStickerSet {
      }
export class TBotCommand extends XBotCommand {
      }
export class TBotInfo extends XBotInfo {
      }

      const TKeyboardButtonOneOfTypes: Array<typeof XKeyboardButton | typeof XKeyboardButtonUrl | typeof XKeyboardButtonCallback | typeof XKeyboardButtonRequestPhone | typeof XKeyboardButtonRequestGeoLocation | typeof XKeyboardButtonSwitchInline | typeof XKeyboardButtonGame | typeof XKeyboardButtonBuy | typeof XKeyboardButtonUrlAuth | typeof XInputKeyboardButtonUrlAuth> = [XKeyboardButton, XKeyboardButtonUrl, XKeyboardButtonCallback, XKeyboardButtonRequestPhone, XKeyboardButtonRequestGeoLocation, XKeyboardButtonSwitchInline, XKeyboardButtonGame, XKeyboardButtonBuy, XKeyboardButtonUrlAuth, XInputKeyboardButtonUrlAuth];
      export class TKeyboardButton extends OneOf<typeof XKeyboardButton | typeof XKeyboardButtonUrl | typeof XKeyboardButtonCallback | typeof XKeyboardButtonRequestPhone | typeof XKeyboardButtonRequestGeoLocation | typeof XKeyboardButtonSwitchInline | typeof XKeyboardButtonGame | typeof XKeyboardButtonBuy | typeof XKeyboardButtonUrlAuth | typeof XInputKeyboardButtonUrlAuth, XKeyboardButton | XKeyboardButtonUrl | XKeyboardButtonCallback | XKeyboardButtonRequestPhone | XKeyboardButtonRequestGeoLocation | XKeyboardButtonSwitchInline | XKeyboardButtonGame | XKeyboardButtonBuy | XKeyboardButtonUrlAuth | XInputKeyboardButtonUrlAuth> {
        getTypes() {
          return TKeyboardButtonOneOfTypes;
        }
      }
export class TKeyboardButtonRow extends XKeyboardButtonRow {
      }

      const TReplyMarkupOneOfTypes: Array<typeof XReplyKeyboardHide | typeof XReplyKeyboardForceReply | typeof XReplyKeyboardMarkup | typeof XReplyInlineMarkup> = [XReplyKeyboardHide, XReplyKeyboardForceReply, XReplyKeyboardMarkup, XReplyInlineMarkup];
      export class TReplyMarkup extends OneOf<typeof XReplyKeyboardHide | typeof XReplyKeyboardForceReply | typeof XReplyKeyboardMarkup | typeof XReplyInlineMarkup, XReplyKeyboardHide | XReplyKeyboardForceReply | XReplyKeyboardMarkup | XReplyInlineMarkup> {
        getTypes() {
          return TReplyMarkupOneOfTypes;
        }
      }

      const TMessageEntityOneOfTypes: Array<typeof XMessageEntityUnknown | typeof XMessageEntityMention | typeof XMessageEntityHashtag | typeof XMessageEntityBotCommand | typeof XMessageEntityUrl | typeof XMessageEntityEmail | typeof XMessageEntityBold | typeof XMessageEntityItalic | typeof XMessageEntityCode | typeof XMessageEntityPre | typeof XMessageEntityTextUrl | typeof XMessageEntityMentionName | typeof XInputMessageEntityMentionName | typeof XMessageEntityPhone | typeof XMessageEntityCashtag | typeof XMessageEntityUnderline | typeof XMessageEntityStrike | typeof XMessageEntityBlockquote> = [XMessageEntityUnknown, XMessageEntityMention, XMessageEntityHashtag, XMessageEntityBotCommand, XMessageEntityUrl, XMessageEntityEmail, XMessageEntityBold, XMessageEntityItalic, XMessageEntityCode, XMessageEntityPre, XMessageEntityTextUrl, XMessageEntityMentionName, XInputMessageEntityMentionName, XMessageEntityPhone, XMessageEntityCashtag, XMessageEntityUnderline, XMessageEntityStrike, XMessageEntityBlockquote];
      export class TMessageEntity extends OneOf<typeof XMessageEntityUnknown | typeof XMessageEntityMention | typeof XMessageEntityHashtag | typeof XMessageEntityBotCommand | typeof XMessageEntityUrl | typeof XMessageEntityEmail | typeof XMessageEntityBold | typeof XMessageEntityItalic | typeof XMessageEntityCode | typeof XMessageEntityPre | typeof XMessageEntityTextUrl | typeof XMessageEntityMentionName | typeof XInputMessageEntityMentionName | typeof XMessageEntityPhone | typeof XMessageEntityCashtag | typeof XMessageEntityUnderline | typeof XMessageEntityStrike | typeof XMessageEntityBlockquote, XMessageEntityUnknown | XMessageEntityMention | XMessageEntityHashtag | XMessageEntityBotCommand | XMessageEntityUrl | XMessageEntityEmail | XMessageEntityBold | XMessageEntityItalic | XMessageEntityCode | XMessageEntityPre | XMessageEntityTextUrl | XMessageEntityMentionName | XInputMessageEntityMentionName | XMessageEntityPhone | XMessageEntityCashtag | XMessageEntityUnderline | XMessageEntityStrike | XMessageEntityBlockquote> {
        getTypes() {
          return TMessageEntityOneOfTypes;
        }
      }

      const TInputChannelOneOfTypes: Array<typeof XInputChannelEmpty | typeof XInputChannel | typeof XInputChannelFromMessage> = [XInputChannelEmpty, XInputChannel, XInputChannelFromMessage];
      export class TInputChannel extends OneOf<typeof XInputChannelEmpty | typeof XInputChannel | typeof XInputChannelFromMessage, XInputChannelEmpty | XInputChannel | XInputChannelFromMessage> {
        getTypes() {
          return TInputChannelOneOfTypes;
        }
      }
export class XContactsXResolvedPeer extends XContactsTResolvedPeer {
      }
export class TMessageRange extends XMessageRange {
      }

      const XUpdatesXChannelDifferenceOneOfTypes: Array<typeof XUpdatesTChannelDifferenceEmpty | typeof XUpdatesTChannelDifferenceTooLong | typeof XUpdatesTChannelDifference> = [XUpdatesTChannelDifferenceEmpty, XUpdatesTChannelDifferenceTooLong, XUpdatesTChannelDifference];
      export class XUpdatesXChannelDifference extends OneOf<typeof XUpdatesTChannelDifferenceEmpty | typeof XUpdatesTChannelDifferenceTooLong | typeof XUpdatesTChannelDifference, XUpdatesTChannelDifferenceEmpty | XUpdatesTChannelDifferenceTooLong | XUpdatesTChannelDifference> {
        getTypes() {
          return XUpdatesXChannelDifferenceOneOfTypes;
        }
      }

      const TChannelMessagesFilterOneOfTypes: Array<typeof XChannelMessagesFilterEmpty | typeof XChannelMessagesFilter> = [XChannelMessagesFilterEmpty, XChannelMessagesFilter];
      export class TChannelMessagesFilter extends OneOf<typeof XChannelMessagesFilterEmpty | typeof XChannelMessagesFilter, XChannelMessagesFilterEmpty | XChannelMessagesFilter> {
        getTypes() {
          return TChannelMessagesFilterOneOfTypes;
        }
      }

      const TChannelParticipantOneOfTypes: Array<typeof XChannelParticipant | typeof XChannelParticipantSelf | typeof XChannelParticipantCreator | typeof XChannelParticipantAdmin | typeof XChannelParticipantBanned> = [XChannelParticipant, XChannelParticipantSelf, XChannelParticipantCreator, XChannelParticipantAdmin, XChannelParticipantBanned];
      export class TChannelParticipant extends OneOf<typeof XChannelParticipant | typeof XChannelParticipantSelf | typeof XChannelParticipantCreator | typeof XChannelParticipantAdmin | typeof XChannelParticipantBanned, XChannelParticipant | XChannelParticipantSelf | XChannelParticipantCreator | XChannelParticipantAdmin | XChannelParticipantBanned> {
        getTypes() {
          return TChannelParticipantOneOfTypes;
        }
      }

      const TChannelParticipantsFilterOneOfTypes: Array<typeof XChannelParticipantsRecent | typeof XChannelParticipantsAdmins | typeof XChannelParticipantsKicked | typeof XChannelParticipantsBots | typeof XChannelParticipantsBanned | typeof XChannelParticipantsSearch | typeof XChannelParticipantsContacts> = [XChannelParticipantsRecent, XChannelParticipantsAdmins, XChannelParticipantsKicked, XChannelParticipantsBots, XChannelParticipantsBanned, XChannelParticipantsSearch, XChannelParticipantsContacts];
      export class TChannelParticipantsFilter extends OneOf<typeof XChannelParticipantsRecent | typeof XChannelParticipantsAdmins | typeof XChannelParticipantsKicked | typeof XChannelParticipantsBots | typeof XChannelParticipantsBanned | typeof XChannelParticipantsSearch | typeof XChannelParticipantsContacts, XChannelParticipantsRecent | XChannelParticipantsAdmins | XChannelParticipantsKicked | XChannelParticipantsBots | XChannelParticipantsBanned | XChannelParticipantsSearch | XChannelParticipantsContacts> {
        getTypes() {
          return TChannelParticipantsFilterOneOfTypes;
        }
      }

      const XChannelsXChannelParticipantsOneOfTypes: Array<typeof XChannelsTChannelParticipants | typeof XChannelsTChannelParticipantsNotModified> = [XChannelsTChannelParticipants, XChannelsTChannelParticipantsNotModified];
      export class XChannelsXChannelParticipants extends OneOf<typeof XChannelsTChannelParticipants | typeof XChannelsTChannelParticipantsNotModified, XChannelsTChannelParticipants | XChannelsTChannelParticipantsNotModified> {
        getTypes() {
          return XChannelsXChannelParticipantsOneOfTypes;
        }
      }
export class XChannelsXChannelParticipant extends XChannelsTChannelParticipant {
      }
export class XHelpXTermsOfService extends XHelpTTermsOfService {
      }

      const TFoundGifOneOfTypes: Array<typeof XFoundGif | typeof XFoundGifCached> = [XFoundGif, XFoundGifCached];
      export class TFoundGif extends OneOf<typeof XFoundGif | typeof XFoundGifCached, XFoundGif | XFoundGifCached> {
        getTypes() {
          return TFoundGifOneOfTypes;
        }
      }
export class XMessagesXFoundGifs extends XMessagesTFoundGifs {
      }

      const XMessagesXSavedGifsOneOfTypes: Array<typeof XMessagesTSavedGifsNotModified | typeof XMessagesTSavedGifs> = [XMessagesTSavedGifsNotModified, XMessagesTSavedGifs];
      export class XMessagesXSavedGifs extends OneOf<typeof XMessagesTSavedGifsNotModified | typeof XMessagesTSavedGifs, XMessagesTSavedGifsNotModified | XMessagesTSavedGifs> {
        getTypes() {
          return XMessagesXSavedGifsOneOfTypes;
        }
      }

      const TInputBotInlineMessageOneOfTypes: Array<typeof XInputBotInlineMessageMediaAuto | typeof XInputBotInlineMessageText | typeof XInputBotInlineMessageMediaGeo | typeof XInputBotInlineMessageMediaVenue | typeof XInputBotInlineMessageMediaContact | typeof XInputBotInlineMessageGame> = [XInputBotInlineMessageMediaAuto, XInputBotInlineMessageText, XInputBotInlineMessageMediaGeo, XInputBotInlineMessageMediaVenue, XInputBotInlineMessageMediaContact, XInputBotInlineMessageGame];
      export class TInputBotInlineMessage extends OneOf<typeof XInputBotInlineMessageMediaAuto | typeof XInputBotInlineMessageText | typeof XInputBotInlineMessageMediaGeo | typeof XInputBotInlineMessageMediaVenue | typeof XInputBotInlineMessageMediaContact | typeof XInputBotInlineMessageGame, XInputBotInlineMessageMediaAuto | XInputBotInlineMessageText | XInputBotInlineMessageMediaGeo | XInputBotInlineMessageMediaVenue | XInputBotInlineMessageMediaContact | XInputBotInlineMessageGame> {
        getTypes() {
          return TInputBotInlineMessageOneOfTypes;
        }
      }

      const TInputBotInlineResultOneOfTypes: Array<typeof XInputBotInlineResult | typeof XInputBotInlineResultPhoto | typeof XInputBotInlineResultDocument | typeof XInputBotInlineResultGame> = [XInputBotInlineResult, XInputBotInlineResultPhoto, XInputBotInlineResultDocument, XInputBotInlineResultGame];
      export class TInputBotInlineResult extends OneOf<typeof XInputBotInlineResult | typeof XInputBotInlineResultPhoto | typeof XInputBotInlineResultDocument | typeof XInputBotInlineResultGame, XInputBotInlineResult | XInputBotInlineResultPhoto | XInputBotInlineResultDocument | XInputBotInlineResultGame> {
        getTypes() {
          return TInputBotInlineResultOneOfTypes;
        }
      }

      const TBotInlineMessageOneOfTypes: Array<typeof XBotInlineMessageMediaAuto | typeof XBotInlineMessageText | typeof XBotInlineMessageMediaGeo | typeof XBotInlineMessageMediaVenue | typeof XBotInlineMessageMediaContact> = [XBotInlineMessageMediaAuto, XBotInlineMessageText, XBotInlineMessageMediaGeo, XBotInlineMessageMediaVenue, XBotInlineMessageMediaContact];
      export class TBotInlineMessage extends OneOf<typeof XBotInlineMessageMediaAuto | typeof XBotInlineMessageText | typeof XBotInlineMessageMediaGeo | typeof XBotInlineMessageMediaVenue | typeof XBotInlineMessageMediaContact, XBotInlineMessageMediaAuto | XBotInlineMessageText | XBotInlineMessageMediaGeo | XBotInlineMessageMediaVenue | XBotInlineMessageMediaContact> {
        getTypes() {
          return TBotInlineMessageOneOfTypes;
        }
      }

      const TBotInlineResultOneOfTypes: Array<typeof XBotInlineResult | typeof XBotInlineMediaResult> = [XBotInlineResult, XBotInlineMediaResult];
      export class TBotInlineResult extends OneOf<typeof XBotInlineResult | typeof XBotInlineMediaResult, XBotInlineResult | XBotInlineMediaResult> {
        getTypes() {
          return TBotInlineResultOneOfTypes;
        }
      }
export class XMessagesXBotResults extends XMessagesTBotResults {
      }
export class TExportedMessageLink extends XExportedMessageLink {
      }
export class TMessageFwdHeader extends XMessageFwdHeader {
      }

      const XAuthXCodeTypeOneOfTypes: Array<typeof XAuthTCodeTypeSms | typeof XAuthTCodeTypeCall | typeof XAuthTCodeTypeFlashCall> = [XAuthTCodeTypeSms, XAuthTCodeTypeCall, XAuthTCodeTypeFlashCall];
      export class XAuthXCodeType extends OneOf<typeof XAuthTCodeTypeSms | typeof XAuthTCodeTypeCall | typeof XAuthTCodeTypeFlashCall, XAuthTCodeTypeSms | XAuthTCodeTypeCall | XAuthTCodeTypeFlashCall> {
        getTypes() {
          return XAuthXCodeTypeOneOfTypes;
        }
      }

      const XAuthXSentCodeTypeOneOfTypes: Array<typeof XAuthTSentCodeTypeApp | typeof XAuthTSentCodeTypeSms | typeof XAuthTSentCodeTypeCall | typeof XAuthTSentCodeTypeFlashCall> = [XAuthTSentCodeTypeApp, XAuthTSentCodeTypeSms, XAuthTSentCodeTypeCall, XAuthTSentCodeTypeFlashCall];
      export class XAuthXSentCodeType extends OneOf<typeof XAuthTSentCodeTypeApp | typeof XAuthTSentCodeTypeSms | typeof XAuthTSentCodeTypeCall | typeof XAuthTSentCodeTypeFlashCall, XAuthTSentCodeTypeApp | XAuthTSentCodeTypeSms | XAuthTSentCodeTypeCall | XAuthTSentCodeTypeFlashCall> {
        getTypes() {
          return XAuthXSentCodeTypeOneOfTypes;
        }
      }
export class XMessagesXBotCallbackAnswer extends XMessagesTBotCallbackAnswer {
      }
export class XMessagesXMessageEditData extends XMessagesTMessageEditData {
      }
export class TInputBotInlineMessageId extends XInputBotInlineMessageId {
      }
export class TInlineBotSwitchPm extends XInlineBotSwitchPm {
      }
export class XMessagesXPeerDialogs extends XMessagesTPeerDialogs {
      }
export class TTopPeer extends XTopPeer {
      }

      const TTopPeerCategoryOneOfTypes: Array<typeof XTopPeerCategoryBotsPm | typeof XTopPeerCategoryBotsInline | typeof XTopPeerCategoryCorrespondents | typeof XTopPeerCategoryGroups | typeof XTopPeerCategoryChannels | typeof XTopPeerCategoryPhoneCalls | typeof XTopPeerCategoryForwardUsers | typeof XTopPeerCategoryForwardChats> = [XTopPeerCategoryBotsPm, XTopPeerCategoryBotsInline, XTopPeerCategoryCorrespondents, XTopPeerCategoryGroups, XTopPeerCategoryChannels, XTopPeerCategoryPhoneCalls, XTopPeerCategoryForwardUsers, XTopPeerCategoryForwardChats];
      export class TTopPeerCategory extends OneOf<typeof XTopPeerCategoryBotsPm | typeof XTopPeerCategoryBotsInline | typeof XTopPeerCategoryCorrespondents | typeof XTopPeerCategoryGroups | typeof XTopPeerCategoryChannels | typeof XTopPeerCategoryPhoneCalls | typeof XTopPeerCategoryForwardUsers | typeof XTopPeerCategoryForwardChats, XTopPeerCategoryBotsPm | XTopPeerCategoryBotsInline | XTopPeerCategoryCorrespondents | XTopPeerCategoryGroups | XTopPeerCategoryChannels | XTopPeerCategoryPhoneCalls | XTopPeerCategoryForwardUsers | XTopPeerCategoryForwardChats> {
        getTypes() {
          return TTopPeerCategoryOneOfTypes;
        }
      }
export class TTopPeerCategoryPeers extends XTopPeerCategoryPeers {
      }

      const XContactsXTopPeersOneOfTypes: Array<typeof XContactsTTopPeersNotModified | typeof XContactsTTopPeers | typeof XContactsTTopPeersDisabled> = [XContactsTTopPeersNotModified, XContactsTTopPeers, XContactsTTopPeersDisabled];
      export class XContactsXTopPeers extends OneOf<typeof XContactsTTopPeersNotModified | typeof XContactsTTopPeers | typeof XContactsTTopPeersDisabled, XContactsTTopPeersNotModified | XContactsTTopPeers | XContactsTTopPeersDisabled> {
        getTypes() {
          return XContactsXTopPeersOneOfTypes;
        }
      }

      const TDraftMessageOneOfTypes: Array<typeof XDraftMessageEmpty | typeof XDraftMessage> = [XDraftMessageEmpty, XDraftMessage];
      export class TDraftMessage extends OneOf<typeof XDraftMessageEmpty | typeof XDraftMessage, XDraftMessageEmpty | XDraftMessage> {
        getTypes() {
          return TDraftMessageOneOfTypes;
        }
      }

      const XMessagesXFeaturedStickersOneOfTypes: Array<typeof XMessagesTFeaturedStickersNotModified | typeof XMessagesTFeaturedStickers> = [XMessagesTFeaturedStickersNotModified, XMessagesTFeaturedStickers];
      export class XMessagesXFeaturedStickers extends OneOf<typeof XMessagesTFeaturedStickersNotModified | typeof XMessagesTFeaturedStickers, XMessagesTFeaturedStickersNotModified | XMessagesTFeaturedStickers> {
        getTypes() {
          return XMessagesXFeaturedStickersOneOfTypes;
        }
      }

      const XMessagesXRecentStickersOneOfTypes: Array<typeof XMessagesTRecentStickersNotModified | typeof XMessagesTRecentStickers> = [XMessagesTRecentStickersNotModified, XMessagesTRecentStickers];
      export class XMessagesXRecentStickers extends OneOf<typeof XMessagesTRecentStickersNotModified | typeof XMessagesTRecentStickers, XMessagesTRecentStickersNotModified | XMessagesTRecentStickers> {
        getTypes() {
          return XMessagesXRecentStickersOneOfTypes;
        }
      }
export class XMessagesXArchivedStickers extends XMessagesTArchivedStickers {
      }

      const XMessagesXStickerSetInstallResultOneOfTypes: Array<typeof XMessagesTStickerSetInstallResultSuccess | typeof XMessagesTStickerSetInstallResultArchive> = [XMessagesTStickerSetInstallResultSuccess, XMessagesTStickerSetInstallResultArchive];
      export class XMessagesXStickerSetInstallResult extends OneOf<typeof XMessagesTStickerSetInstallResultSuccess | typeof XMessagesTStickerSetInstallResultArchive, XMessagesTStickerSetInstallResultSuccess | XMessagesTStickerSetInstallResultArchive> {
        getTypes() {
          return XMessagesXStickerSetInstallResultOneOfTypes;
        }
      }

      const TStickerSetCoveredOneOfTypes: Array<typeof XStickerSetCovered | typeof XStickerSetMultiCovered> = [XStickerSetCovered, XStickerSetMultiCovered];
      export class TStickerSetCovered extends OneOf<typeof XStickerSetCovered | typeof XStickerSetMultiCovered, XStickerSetCovered | XStickerSetMultiCovered> {
        getTypes() {
          return TStickerSetCoveredOneOfTypes;
        }
      }
export class TMaskCoords extends XMaskCoords {
      }

      const TInputStickeredMediaOneOfTypes: Array<typeof XInputStickeredMediaPhoto | typeof XInputStickeredMediaDocument> = [XInputStickeredMediaPhoto, XInputStickeredMediaDocument];
      export class TInputStickeredMedia extends OneOf<typeof XInputStickeredMediaPhoto | typeof XInputStickeredMediaDocument, XInputStickeredMediaPhoto | XInputStickeredMediaDocument> {
        getTypes() {
          return TInputStickeredMediaOneOfTypes;
        }
      }
export class TGame extends XGame {
      }

      const TInputGameOneOfTypes: Array<typeof XInputGameId | typeof XInputGameShortName> = [XInputGameId, XInputGameShortName];
      export class TInputGame extends OneOf<typeof XInputGameId | typeof XInputGameShortName, XInputGameId | XInputGameShortName> {
        getTypes() {
          return TInputGameOneOfTypes;
        }
      }
export class THighScore extends XHighScore {
      }
export class XMessagesXHighScores extends XMessagesTHighScores {
      }

      const TRichTextOneOfTypes: Array<typeof XTextEmpty | typeof XTextPlain | typeof XTextBold | typeof XTextItalic | typeof XTextUnderline | typeof XTextStrike | typeof XTextFixed | typeof XTextUrl | typeof XTextEmail | typeof XTextConcat | typeof XTextSubscript | typeof XTextSuperscript | typeof XTextMarked | typeof XTextPhone | typeof XTextImage | typeof XTextAnchor> = [XTextEmpty, XTextPlain, XTextBold, XTextItalic, XTextUnderline, XTextStrike, XTextFixed, XTextUrl, XTextEmail, XTextConcat, XTextSubscript, XTextSuperscript, XTextMarked, XTextPhone, XTextImage, XTextAnchor];
      export class TRichText extends OneOf<typeof XTextEmpty | typeof XTextPlain | typeof XTextBold | typeof XTextItalic | typeof XTextUnderline | typeof XTextStrike | typeof XTextFixed | typeof XTextUrl | typeof XTextEmail | typeof XTextConcat | typeof XTextSubscript | typeof XTextSuperscript | typeof XTextMarked | typeof XTextPhone | typeof XTextImage | typeof XTextAnchor, XTextEmpty | XTextPlain | XTextBold | XTextItalic | XTextUnderline | XTextStrike | XTextFixed | XTextUrl | XTextEmail | XTextConcat | XTextSubscript | XTextSuperscript | XTextMarked | XTextPhone | XTextImage | XTextAnchor> {
        getTypes() {
          return TRichTextOneOfTypes;
        }
      }

      const TPageBlockOneOfTypes: Array<typeof XPageBlockUnsupported | typeof XPageBlockTitle | typeof XPageBlockSubtitle | typeof XPageBlockAuthorDate | typeof XPageBlockHeader | typeof XPageBlockSubheader | typeof XPageBlockParagraph | typeof XPageBlockPreformatted | typeof XPageBlockFooter | typeof XPageBlockDivider | typeof XPageBlockAnchor | typeof XPageBlockList | typeof XPageBlockBlockquote | typeof XPageBlockPullquote | typeof XPageBlockPhoto | typeof XPageBlockVideo | typeof XPageBlockCover | typeof XPageBlockEmbed | typeof XPageBlockEmbedPost | typeof XPageBlockCollage | typeof XPageBlockSlideshow | typeof XPageBlockChannel | typeof XPageBlockAudio | typeof XPageBlockKicker | typeof XPageBlockTable | typeof XPageBlockOrderedList | typeof XPageBlockDetails | typeof XPageBlockRelatedArticles | typeof XPageBlockMap> = [XPageBlockUnsupported, XPageBlockTitle, XPageBlockSubtitle, XPageBlockAuthorDate, XPageBlockHeader, XPageBlockSubheader, XPageBlockParagraph, XPageBlockPreformatted, XPageBlockFooter, XPageBlockDivider, XPageBlockAnchor, XPageBlockList, XPageBlockBlockquote, XPageBlockPullquote, XPageBlockPhoto, XPageBlockVideo, XPageBlockCover, XPageBlockEmbed, XPageBlockEmbedPost, XPageBlockCollage, XPageBlockSlideshow, XPageBlockChannel, XPageBlockAudio, XPageBlockKicker, XPageBlockTable, XPageBlockOrderedList, XPageBlockDetails, XPageBlockRelatedArticles, XPageBlockMap];
      export class TPageBlock extends OneOf<typeof XPageBlockUnsupported | typeof XPageBlockTitle | typeof XPageBlockSubtitle | typeof XPageBlockAuthorDate | typeof XPageBlockHeader | typeof XPageBlockSubheader | typeof XPageBlockParagraph | typeof XPageBlockPreformatted | typeof XPageBlockFooter | typeof XPageBlockDivider | typeof XPageBlockAnchor | typeof XPageBlockList | typeof XPageBlockBlockquote | typeof XPageBlockPullquote | typeof XPageBlockPhoto | typeof XPageBlockVideo | typeof XPageBlockCover | typeof XPageBlockEmbed | typeof XPageBlockEmbedPost | typeof XPageBlockCollage | typeof XPageBlockSlideshow | typeof XPageBlockChannel | typeof XPageBlockAudio | typeof XPageBlockKicker | typeof XPageBlockTable | typeof XPageBlockOrderedList | typeof XPageBlockDetails | typeof XPageBlockRelatedArticles | typeof XPageBlockMap, XPageBlockUnsupported | XPageBlockTitle | XPageBlockSubtitle | XPageBlockAuthorDate | XPageBlockHeader | XPageBlockSubheader | XPageBlockParagraph | XPageBlockPreformatted | XPageBlockFooter | XPageBlockDivider | XPageBlockAnchor | XPageBlockList | XPageBlockBlockquote | XPageBlockPullquote | XPageBlockPhoto | XPageBlockVideo | XPageBlockCover | XPageBlockEmbed | XPageBlockEmbedPost | XPageBlockCollage | XPageBlockSlideshow | XPageBlockChannel | XPageBlockAudio | XPageBlockKicker | XPageBlockTable | XPageBlockOrderedList | XPageBlockDetails | XPageBlockRelatedArticles | XPageBlockMap> {
        getTypes() {
          return TPageBlockOneOfTypes;
        }
      }

      const TPhoneCallDiscardReasonOneOfTypes: Array<typeof XPhoneCallDiscardReasonMissed | typeof XPhoneCallDiscardReasonDisconnect | typeof XPhoneCallDiscardReasonHangup | typeof XPhoneCallDiscardReasonBusy> = [XPhoneCallDiscardReasonMissed, XPhoneCallDiscardReasonDisconnect, XPhoneCallDiscardReasonHangup, XPhoneCallDiscardReasonBusy];
      export class TPhoneCallDiscardReason extends OneOf<typeof XPhoneCallDiscardReasonMissed | typeof XPhoneCallDiscardReasonDisconnect | typeof XPhoneCallDiscardReasonHangup | typeof XPhoneCallDiscardReasonBusy, XPhoneCallDiscardReasonMissed | XPhoneCallDiscardReasonDisconnect | XPhoneCallDiscardReasonHangup | XPhoneCallDiscardReasonBusy> {
        getTypes() {
          return TPhoneCallDiscardReasonOneOfTypes;
        }
      }
export class TDataJson extends XDataJson {
      }
export class TLabeledPrice extends XLabeledPrice {
      }
export class TInvoice extends XInvoice {
      }
export class TPaymentCharge extends XPaymentCharge {
      }
export class TPostAddress extends XPostAddress {
      }
export class TPaymentRequestedInfo extends XPaymentRequestedInfo {
      }
export class TPaymentSavedCredentials extends XPaymentSavedCredentialsCard {
      }

      const TWebDocumentOneOfTypes: Array<typeof XWebDocument | typeof XWebDocumentNoProxy> = [XWebDocument, XWebDocumentNoProxy];
      export class TWebDocument extends OneOf<typeof XWebDocument | typeof XWebDocumentNoProxy, XWebDocument | XWebDocumentNoProxy> {
        getTypes() {
          return TWebDocumentOneOfTypes;
        }
      }
export class TInputWebDocument extends XInputWebDocument {
      }

      const TInputWebFileLocationOneOfTypes: Array<typeof XInputWebFileLocation | typeof XInputWebFileGeoPointLocation> = [XInputWebFileLocation, XInputWebFileGeoPointLocation];
      export class TInputWebFileLocation extends OneOf<typeof XInputWebFileLocation | typeof XInputWebFileGeoPointLocation, XInputWebFileLocation | XInputWebFileGeoPointLocation> {
        getTypes() {
          return TInputWebFileLocationOneOfTypes;
        }
      }
export class XUploadXWebFile extends XUploadTWebFile {
      }
export class XPaymentsXPaymentForm extends XPaymentsTPaymentForm {
      }
export class XPaymentsXValidatedRequestedInfo extends XPaymentsTValidatedRequestedInfo {
      }

      const XPaymentsXPaymentResultOneOfTypes: Array<typeof XPaymentsTPaymentResult | typeof XPaymentsTPaymentVerificationNeeded> = [XPaymentsTPaymentResult, XPaymentsTPaymentVerificationNeeded];
      export class XPaymentsXPaymentResult extends OneOf<typeof XPaymentsTPaymentResult | typeof XPaymentsTPaymentVerificationNeeded, XPaymentsTPaymentResult | XPaymentsTPaymentVerificationNeeded> {
        getTypes() {
          return XPaymentsXPaymentResultOneOfTypes;
        }
      }
export class XPaymentsXPaymentReceipt extends XPaymentsTPaymentReceipt {
      }
export class XPaymentsXSavedInfo extends XPaymentsTSavedInfo {
      }

      const TInputPaymentCredentialsOneOfTypes: Array<typeof XInputPaymentCredentialsSaved | typeof XInputPaymentCredentials | typeof XInputPaymentCredentialsApplePay | typeof XInputPaymentCredentialsAndroidPay> = [XInputPaymentCredentialsSaved, XInputPaymentCredentials, XInputPaymentCredentialsApplePay, XInputPaymentCredentialsAndroidPay];
      export class TInputPaymentCredentials extends OneOf<typeof XInputPaymentCredentialsSaved | typeof XInputPaymentCredentials | typeof XInputPaymentCredentialsApplePay | typeof XInputPaymentCredentialsAndroidPay, XInputPaymentCredentialsSaved | XInputPaymentCredentials | XInputPaymentCredentialsApplePay | XInputPaymentCredentialsAndroidPay> {
        getTypes() {
          return TInputPaymentCredentialsOneOfTypes;
        }
      }
export class XAccountXTmpPassword extends XAccountTTmpPassword {
      }
export class TShippingOption extends XShippingOption {
      }
export class TInputStickerSetItem extends XInputStickerSetItem {
      }
export class TInputPhoneCall extends XInputPhoneCall {
      }

      const TPhoneCallOneOfTypes: Array<typeof XPhoneCallEmpty | typeof XPhoneCallWaiting | typeof XPhoneCallRequested | typeof XPhoneCallAccepted | typeof XPhoneCall | typeof XPhoneCallDiscarded> = [XPhoneCallEmpty, XPhoneCallWaiting, XPhoneCallRequested, XPhoneCallAccepted, XPhoneCall, XPhoneCallDiscarded];
      export class TPhoneCall extends OneOf<typeof XPhoneCallEmpty | typeof XPhoneCallWaiting | typeof XPhoneCallRequested | typeof XPhoneCallAccepted | typeof XPhoneCall | typeof XPhoneCallDiscarded, XPhoneCallEmpty | XPhoneCallWaiting | XPhoneCallRequested | XPhoneCallAccepted | XPhoneCall | XPhoneCallDiscarded> {
        getTypes() {
          return TPhoneCallOneOfTypes;
        }
      }
export class TPhoneConnection extends XPhoneConnection {
      }
export class TPhoneCallProtocol extends XPhoneCallProtocol {
      }
export class XPhoneXPhoneCall extends XPhoneTPhoneCall {
      }

      const XUploadXCdnFileOneOfTypes: Array<typeof XUploadTCdnFileReuploadNeeded | typeof XUploadTCdnFile> = [XUploadTCdnFileReuploadNeeded, XUploadTCdnFile];
      export class XUploadXCdnFile extends OneOf<typeof XUploadTCdnFileReuploadNeeded | typeof XUploadTCdnFile, XUploadTCdnFileReuploadNeeded | XUploadTCdnFile> {
        getTypes() {
          return XUploadXCdnFileOneOfTypes;
        }
      }
export class TCdnPublicKey extends XCdnPublicKey {
      }
export class TCdnConfig extends XCdnConfig {
      }

      const TLangPackStringOneOfTypes: Array<typeof XLangPackString | typeof XLangPackStringPluralized | typeof XLangPackStringDeleted> = [XLangPackString, XLangPackStringPluralized, XLangPackStringDeleted];
      export class TLangPackString extends OneOf<typeof XLangPackString | typeof XLangPackStringPluralized | typeof XLangPackStringDeleted, XLangPackString | XLangPackStringPluralized | XLangPackStringDeleted> {
        getTypes() {
          return TLangPackStringOneOfTypes;
        }
      }
export class TLangPackDifference extends XLangPackDifference {
      }
export class TLangPackLanguage extends XLangPackLanguage {
      }

      const TChannelAdminLogEventActionOneOfTypes: Array<typeof XChannelAdminLogEventActionChangeTitle | typeof XChannelAdminLogEventActionChangeAbout | typeof XChannelAdminLogEventActionChangeUsername | typeof XChannelAdminLogEventActionChangePhoto | typeof XChannelAdminLogEventActionToggleInvites | typeof XChannelAdminLogEventActionToggleSignatures | typeof XChannelAdminLogEventActionUpdatePinned | typeof XChannelAdminLogEventActionEditMessage | typeof XChannelAdminLogEventActionDeleteMessage | typeof XChannelAdminLogEventActionParticipantJoin | typeof XChannelAdminLogEventActionParticipantLeave | typeof XChannelAdminLogEventActionParticipantInvite | typeof XChannelAdminLogEventActionParticipantToggleBan | typeof XChannelAdminLogEventActionParticipantToggleAdmin | typeof XChannelAdminLogEventActionChangeStickerSet | typeof XChannelAdminLogEventActionTogglePreHistoryHidden | typeof XChannelAdminLogEventActionDefaultBannedRights | typeof XChannelAdminLogEventActionStopPoll | typeof XChannelAdminLogEventActionChangeLinkedChat | typeof XChannelAdminLogEventActionChangeLocation | typeof XChannelAdminLogEventActionToggleSlowMode> = [XChannelAdminLogEventActionChangeTitle, XChannelAdminLogEventActionChangeAbout, XChannelAdminLogEventActionChangeUsername, XChannelAdminLogEventActionChangePhoto, XChannelAdminLogEventActionToggleInvites, XChannelAdminLogEventActionToggleSignatures, XChannelAdminLogEventActionUpdatePinned, XChannelAdminLogEventActionEditMessage, XChannelAdminLogEventActionDeleteMessage, XChannelAdminLogEventActionParticipantJoin, XChannelAdminLogEventActionParticipantLeave, XChannelAdminLogEventActionParticipantInvite, XChannelAdminLogEventActionParticipantToggleBan, XChannelAdminLogEventActionParticipantToggleAdmin, XChannelAdminLogEventActionChangeStickerSet, XChannelAdminLogEventActionTogglePreHistoryHidden, XChannelAdminLogEventActionDefaultBannedRights, XChannelAdminLogEventActionStopPoll, XChannelAdminLogEventActionChangeLinkedChat, XChannelAdminLogEventActionChangeLocation, XChannelAdminLogEventActionToggleSlowMode];
      export class TChannelAdminLogEventAction extends OneOf<typeof XChannelAdminLogEventActionChangeTitle | typeof XChannelAdminLogEventActionChangeAbout | typeof XChannelAdminLogEventActionChangeUsername | typeof XChannelAdminLogEventActionChangePhoto | typeof XChannelAdminLogEventActionToggleInvites | typeof XChannelAdminLogEventActionToggleSignatures | typeof XChannelAdminLogEventActionUpdatePinned | typeof XChannelAdminLogEventActionEditMessage | typeof XChannelAdminLogEventActionDeleteMessage | typeof XChannelAdminLogEventActionParticipantJoin | typeof XChannelAdminLogEventActionParticipantLeave | typeof XChannelAdminLogEventActionParticipantInvite | typeof XChannelAdminLogEventActionParticipantToggleBan | typeof XChannelAdminLogEventActionParticipantToggleAdmin | typeof XChannelAdminLogEventActionChangeStickerSet | typeof XChannelAdminLogEventActionTogglePreHistoryHidden | typeof XChannelAdminLogEventActionDefaultBannedRights | typeof XChannelAdminLogEventActionStopPoll | typeof XChannelAdminLogEventActionChangeLinkedChat | typeof XChannelAdminLogEventActionChangeLocation | typeof XChannelAdminLogEventActionToggleSlowMode, XChannelAdminLogEventActionChangeTitle | XChannelAdminLogEventActionChangeAbout | XChannelAdminLogEventActionChangeUsername | XChannelAdminLogEventActionChangePhoto | XChannelAdminLogEventActionToggleInvites | XChannelAdminLogEventActionToggleSignatures | XChannelAdminLogEventActionUpdatePinned | XChannelAdminLogEventActionEditMessage | XChannelAdminLogEventActionDeleteMessage | XChannelAdminLogEventActionParticipantJoin | XChannelAdminLogEventActionParticipantLeave | XChannelAdminLogEventActionParticipantInvite | XChannelAdminLogEventActionParticipantToggleBan | XChannelAdminLogEventActionParticipantToggleAdmin | XChannelAdminLogEventActionChangeStickerSet | XChannelAdminLogEventActionTogglePreHistoryHidden | XChannelAdminLogEventActionDefaultBannedRights | XChannelAdminLogEventActionStopPoll | XChannelAdminLogEventActionChangeLinkedChat | XChannelAdminLogEventActionChangeLocation | XChannelAdminLogEventActionToggleSlowMode> {
        getTypes() {
          return TChannelAdminLogEventActionOneOfTypes;
        }
      }
export class TChannelAdminLogEvent extends XChannelAdminLogEvent {
      }
export class XChannelsXAdminLogResults extends XChannelsTAdminLogResults {
      }
export class TChannelAdminLogEventsFilter extends XChannelAdminLogEventsFilter {
      }
export class TPopularContact extends XPopularContact {
      }

      const XMessagesXFavedStickersOneOfTypes: Array<typeof XMessagesTFavedStickersNotModified | typeof XMessagesTFavedStickers> = [XMessagesTFavedStickersNotModified, XMessagesTFavedStickers];
      export class XMessagesXFavedStickers extends OneOf<typeof XMessagesTFavedStickersNotModified | typeof XMessagesTFavedStickers, XMessagesTFavedStickersNotModified | XMessagesTFavedStickers> {
        getTypes() {
          return XMessagesXFavedStickersOneOfTypes;
        }
      }

      const TRecentMeUrlOneOfTypes: Array<typeof XRecentMeUrlUnknown | typeof XRecentMeUrlUser | typeof XRecentMeUrlChat | typeof XRecentMeUrlChatInvite | typeof XRecentMeUrlStickerSet> = [XRecentMeUrlUnknown, XRecentMeUrlUser, XRecentMeUrlChat, XRecentMeUrlChatInvite, XRecentMeUrlStickerSet];
      export class TRecentMeUrl extends OneOf<typeof XRecentMeUrlUnknown | typeof XRecentMeUrlUser | typeof XRecentMeUrlChat | typeof XRecentMeUrlChatInvite | typeof XRecentMeUrlStickerSet, XRecentMeUrlUnknown | XRecentMeUrlUser | XRecentMeUrlChat | XRecentMeUrlChatInvite | XRecentMeUrlStickerSet> {
        getTypes() {
          return TRecentMeUrlOneOfTypes;
        }
      }
export class XHelpXRecentMeUrls extends XHelpTRecentMeUrls {
      }
export class TInputSingleMedia extends XInputSingleMedia {
      }
export class TWebAuthorization extends XWebAuthorization {
      }
export class XAccountXWebAuthorizations extends XAccountTWebAuthorizations {
      }

      const TInputMessageOneOfTypes: Array<typeof XInputMessageId | typeof XInputMessageReplyTo | typeof XInputMessagePinned> = [XInputMessageId, XInputMessageReplyTo, XInputMessagePinned];
      export class TInputMessage extends OneOf<typeof XInputMessageId | typeof XInputMessageReplyTo | typeof XInputMessagePinned, XInputMessageId | XInputMessageReplyTo | XInputMessagePinned> {
        getTypes() {
          return TInputMessageOneOfTypes;
        }
      }

      const TInputDialogPeerOneOfTypes: Array<typeof XInputDialogPeer | typeof XInputDialogPeerFolder> = [XInputDialogPeer, XInputDialogPeerFolder];
      export class TInputDialogPeer extends OneOf<typeof XInputDialogPeer | typeof XInputDialogPeerFolder, XInputDialogPeer | XInputDialogPeerFolder> {
        getTypes() {
          return TInputDialogPeerOneOfTypes;
        }
      }

      const TDialogPeerOneOfTypes: Array<typeof XDialogPeer | typeof XDialogPeerFolder> = [XDialogPeer, XDialogPeerFolder];
      export class TDialogPeer extends OneOf<typeof XDialogPeer | typeof XDialogPeerFolder, XDialogPeer | XDialogPeerFolder> {
        getTypes() {
          return TDialogPeerOneOfTypes;
        }
      }

      const XMessagesXFoundStickerSetsOneOfTypes: Array<typeof XMessagesTFoundStickerSetsNotModified | typeof XMessagesTFoundStickerSets> = [XMessagesTFoundStickerSetsNotModified, XMessagesTFoundStickerSets];
      export class XMessagesXFoundStickerSets extends OneOf<typeof XMessagesTFoundStickerSetsNotModified | typeof XMessagesTFoundStickerSets, XMessagesTFoundStickerSetsNotModified | XMessagesTFoundStickerSets> {
        getTypes() {
          return XMessagesXFoundStickerSetsOneOfTypes;
        }
      }
export class TFileHash extends XFileHash {
      }
export class TInputClientProxy extends XInputClientProxy {
      }

      const XHelpXProxyDataOneOfTypes: Array<typeof XHelpTProxyDataEmpty | typeof XHelpTProxyDataPromo> = [XHelpTProxyDataEmpty, XHelpTProxyDataPromo];
      export class XHelpXProxyData extends OneOf<typeof XHelpTProxyDataEmpty | typeof XHelpTProxyDataPromo, XHelpTProxyDataEmpty | XHelpTProxyDataPromo> {
        getTypes() {
          return XHelpXProxyDataOneOfTypes;
        }
      }

      const XHelpXTermsOfServiceUpdateOneOfTypes: Array<typeof XHelpTTermsOfServiceUpdateEmpty | typeof XHelpTTermsOfServiceUpdate> = [XHelpTTermsOfServiceUpdateEmpty, XHelpTTermsOfServiceUpdate];
      export class XHelpXTermsOfServiceUpdate extends OneOf<typeof XHelpTTermsOfServiceUpdateEmpty | typeof XHelpTTermsOfServiceUpdate, XHelpTTermsOfServiceUpdateEmpty | XHelpTTermsOfServiceUpdate> {
        getTypes() {
          return XHelpXTermsOfServiceUpdateOneOfTypes;
        }
      }

      const TInputSecureFileOneOfTypes: Array<typeof XInputSecureFileUploaded | typeof XInputSecureFile> = [XInputSecureFileUploaded, XInputSecureFile];
      export class TInputSecureFile extends OneOf<typeof XInputSecureFileUploaded | typeof XInputSecureFile, XInputSecureFileUploaded | XInputSecureFile> {
        getTypes() {
          return TInputSecureFileOneOfTypes;
        }
      }

      const TSecureFileOneOfTypes: Array<typeof XSecureFileEmpty | typeof XSecureFile> = [XSecureFileEmpty, XSecureFile];
      export class TSecureFile extends OneOf<typeof XSecureFileEmpty | typeof XSecureFile, XSecureFileEmpty | XSecureFile> {
        getTypes() {
          return TSecureFileOneOfTypes;
        }
      }
export class TSecureData extends XSecureData {
      }

      const TSecurePlainDataOneOfTypes: Array<typeof XSecurePlainPhone | typeof XSecurePlainEmail> = [XSecurePlainPhone, XSecurePlainEmail];
      export class TSecurePlainData extends OneOf<typeof XSecurePlainPhone | typeof XSecurePlainEmail, XSecurePlainPhone | XSecurePlainEmail> {
        getTypes() {
          return TSecurePlainDataOneOfTypes;
        }
      }

      const TSecureValueTypeOneOfTypes: Array<typeof XSecureValueTypePersonalDetails | typeof XSecureValueTypePassport | typeof XSecureValueTypeDriverLicense | typeof XSecureValueTypeIdentityCard | typeof XSecureValueTypeInternalPassport | typeof XSecureValueTypeAddress | typeof XSecureValueTypeUtilityBill | typeof XSecureValueTypeBankStatement | typeof XSecureValueTypeRentalAgreement | typeof XSecureValueTypePassportRegistration | typeof XSecureValueTypeTemporaryRegistration | typeof XSecureValueTypePhone | typeof XSecureValueTypeEmail> = [XSecureValueTypePersonalDetails, XSecureValueTypePassport, XSecureValueTypeDriverLicense, XSecureValueTypeIdentityCard, XSecureValueTypeInternalPassport, XSecureValueTypeAddress, XSecureValueTypeUtilityBill, XSecureValueTypeBankStatement, XSecureValueTypeRentalAgreement, XSecureValueTypePassportRegistration, XSecureValueTypeTemporaryRegistration, XSecureValueTypePhone, XSecureValueTypeEmail];
      export class TSecureValueType extends OneOf<typeof XSecureValueTypePersonalDetails | typeof XSecureValueTypePassport | typeof XSecureValueTypeDriverLicense | typeof XSecureValueTypeIdentityCard | typeof XSecureValueTypeInternalPassport | typeof XSecureValueTypeAddress | typeof XSecureValueTypeUtilityBill | typeof XSecureValueTypeBankStatement | typeof XSecureValueTypeRentalAgreement | typeof XSecureValueTypePassportRegistration | typeof XSecureValueTypeTemporaryRegistration | typeof XSecureValueTypePhone | typeof XSecureValueTypeEmail, XSecureValueTypePersonalDetails | XSecureValueTypePassport | XSecureValueTypeDriverLicense | XSecureValueTypeIdentityCard | XSecureValueTypeInternalPassport | XSecureValueTypeAddress | XSecureValueTypeUtilityBill | XSecureValueTypeBankStatement | XSecureValueTypeRentalAgreement | XSecureValueTypePassportRegistration | XSecureValueTypeTemporaryRegistration | XSecureValueTypePhone | XSecureValueTypeEmail> {
        getTypes() {
          return TSecureValueTypeOneOfTypes;
        }
      }
export class TSecureValue extends XSecureValue {
      }
export class TInputSecureValue extends XInputSecureValue {
      }
export class TSecureValueHash extends XSecureValueHash {
      }

      const TSecureValueErrorOneOfTypes: Array<typeof XSecureValueErrorData | typeof XSecureValueErrorFrontSide | typeof XSecureValueErrorReverseSide | typeof XSecureValueErrorSelfie | typeof XSecureValueErrorFile | typeof XSecureValueErrorFiles | typeof XSecureValueError | typeof XSecureValueErrorTranslationFile | typeof XSecureValueErrorTranslationFiles> = [XSecureValueErrorData, XSecureValueErrorFrontSide, XSecureValueErrorReverseSide, XSecureValueErrorSelfie, XSecureValueErrorFile, XSecureValueErrorFiles, XSecureValueError, XSecureValueErrorTranslationFile, XSecureValueErrorTranslationFiles];
      export class TSecureValueError extends OneOf<typeof XSecureValueErrorData | typeof XSecureValueErrorFrontSide | typeof XSecureValueErrorReverseSide | typeof XSecureValueErrorSelfie | typeof XSecureValueErrorFile | typeof XSecureValueErrorFiles | typeof XSecureValueError | typeof XSecureValueErrorTranslationFile | typeof XSecureValueErrorTranslationFiles, XSecureValueErrorData | XSecureValueErrorFrontSide | XSecureValueErrorReverseSide | XSecureValueErrorSelfie | XSecureValueErrorFile | XSecureValueErrorFiles | XSecureValueError | XSecureValueErrorTranslationFile | XSecureValueErrorTranslationFiles> {
        getTypes() {
          return TSecureValueErrorOneOfTypes;
        }
      }
export class TSecureCredentialsEncrypted extends XSecureCredentialsEncrypted {
      }
export class XAccountXAuthorizationForm extends XAccountTAuthorizationForm {
      }
export class XAccountXSentEmailCode extends XAccountTSentEmailCode {
      }

      const XHelpXDeepLinkInfoOneOfTypes: Array<typeof XHelpTDeepLinkInfoEmpty | typeof XHelpTDeepLinkInfo> = [XHelpTDeepLinkInfoEmpty, XHelpTDeepLinkInfo];
      export class XHelpXDeepLinkInfo extends OneOf<typeof XHelpTDeepLinkInfoEmpty | typeof XHelpTDeepLinkInfo, XHelpTDeepLinkInfoEmpty | XHelpTDeepLinkInfo> {
        getTypes() {
          return XHelpXDeepLinkInfoOneOfTypes;
        }
      }
export class TSavedContact extends XSavedPhoneContact {
      }
export class XAccountXTakeout extends XAccountTTakeout {
      }

      const TPasswordKdfAlgoOneOfTypes: Array<typeof XPasswordKdfAlgoUnknown | typeof XPasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPow> = [XPasswordKdfAlgoUnknown, XPasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPow];
      export class TPasswordKdfAlgo extends OneOf<typeof XPasswordKdfAlgoUnknown | typeof XPasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPow, XPasswordKdfAlgoUnknown | XPasswordKdfAlgoSha256Sha256Pbkdf2Hmacsha512Iter100000Sha256ModPow> {
        getTypes() {
          return TPasswordKdfAlgoOneOfTypes;
        }
      }

      const TSecurePasswordKdfAlgoOneOfTypes: Array<typeof XSecurePasswordKdfAlgoUnknown | typeof XSecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000 | typeof XSecurePasswordKdfAlgoSha512> = [XSecurePasswordKdfAlgoUnknown, XSecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000, XSecurePasswordKdfAlgoSha512];
      export class TSecurePasswordKdfAlgo extends OneOf<typeof XSecurePasswordKdfAlgoUnknown | typeof XSecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000 | typeof XSecurePasswordKdfAlgoSha512, XSecurePasswordKdfAlgoUnknown | XSecurePasswordKdfAlgoPbkdf2Hmacsha512Iter100000 | XSecurePasswordKdfAlgoSha512> {
        getTypes() {
          return TSecurePasswordKdfAlgoOneOfTypes;
        }
      }
export class TSecureSecretSettings extends XSecureSecretSettings {
      }

      const TInputCheckPasswordSrpOneOfTypes: Array<typeof XInputCheckPasswordEmpty | typeof XInputCheckPasswordSrp> = [XInputCheckPasswordEmpty, XInputCheckPasswordSrp];
      export class TInputCheckPasswordSrp extends OneOf<typeof XInputCheckPasswordEmpty | typeof XInputCheckPasswordSrp, XInputCheckPasswordEmpty | XInputCheckPasswordSrp> {
        getTypes() {
          return TInputCheckPasswordSrpOneOfTypes;
        }
      }

      const TSecureRequiredTypeOneOfTypes: Array<typeof XSecureRequiredType | typeof XSecureRequiredTypeOneOf> = [XSecureRequiredType, XSecureRequiredTypeOneOf];
      export class TSecureRequiredType extends OneOf<typeof XSecureRequiredType | typeof XSecureRequiredTypeOneOf, XSecureRequiredType | XSecureRequiredTypeOneOf> {
        getTypes() {
          return TSecureRequiredTypeOneOfTypes;
        }
      }

      const XHelpXPassportConfigOneOfTypes: Array<typeof XHelpTPassportConfigNotModified | typeof XHelpTPassportConfig> = [XHelpTPassportConfigNotModified, XHelpTPassportConfig];
      export class XHelpXPassportConfig extends OneOf<typeof XHelpTPassportConfigNotModified | typeof XHelpTPassportConfig, XHelpTPassportConfigNotModified | XHelpTPassportConfig> {
        getTypes() {
          return XHelpXPassportConfigOneOfTypes;
        }
      }
export class TInputAppEvent extends XInputAppEvent {
      }
export class TJsonObjectValue extends XJsonObjectValue {
      }

      const TJsonValueOneOfTypes: Array<typeof XJsonNull | typeof XJsonBool | typeof XJsonNumber | typeof XJsonString | typeof XJsonArray | typeof XJsonObject> = [XJsonNull, XJsonBool, XJsonNumber, XJsonString, XJsonArray, XJsonObject];
      export class TJsonValue extends OneOf<typeof XJsonNull | typeof XJsonBool | typeof XJsonNumber | typeof XJsonString | typeof XJsonArray | typeof XJsonObject, XJsonNull | XJsonBool | XJsonNumber | XJsonString | XJsonArray | XJsonObject> {
        getTypes() {
          return TJsonValueOneOfTypes;
        }
      }
export class TPageTableCell extends XPageTableCell {
      }
export class TPageTableRow extends XPageTableRow {
      }
export class TPageCaption extends XPageCaption {
      }

      const TPageListItemOneOfTypes: Array<typeof XPageListItemText | typeof XPageListItemBlocks> = [XPageListItemText, XPageListItemBlocks];
      export class TPageListItem extends OneOf<typeof XPageListItemText | typeof XPageListItemBlocks, XPageListItemText | XPageListItemBlocks> {
        getTypes() {
          return TPageListItemOneOfTypes;
        }
      }

      const TPageListOrderedItemOneOfTypes: Array<typeof XPageListOrderedItemText | typeof XPageListOrderedItemBlocks> = [XPageListOrderedItemText, XPageListOrderedItemBlocks];
      export class TPageListOrderedItem extends OneOf<typeof XPageListOrderedItemText | typeof XPageListOrderedItemBlocks, XPageListOrderedItemText | XPageListOrderedItemBlocks> {
        getTypes() {
          return TPageListOrderedItemOneOfTypes;
        }
      }
export class TPageRelatedArticle extends XPageRelatedArticle {
      }
export class TPage extends XPage {
      }
export class XHelpXSupportName extends XHelpTSupportName {
      }

      const XHelpXUserInfoOneOfTypes: Array<typeof XHelpTUserInfoEmpty | typeof XHelpTUserInfo> = [XHelpTUserInfoEmpty, XHelpTUserInfo];
      export class XHelpXUserInfo extends OneOf<typeof XHelpTUserInfoEmpty | typeof XHelpTUserInfo, XHelpTUserInfoEmpty | XHelpTUserInfo> {
        getTypes() {
          return XHelpXUserInfoOneOfTypes;
        }
      }
export class TPollAnswer extends XPollAnswer {
      }
export class TPoll extends XPoll {
      }
export class TPollAnswerVoters extends XPollAnswerVoters {
      }
export class TPollResults extends XPollResults {
      }
export class TChatOnlines extends XChatOnlines {
      }
export class TStatsUrl extends XStatsUrl {
      }
export class TChatAdminRights extends XChatAdminRights {
      }
export class TChatBannedRights extends XChatBannedRights {
      }

      const TInputWallPaperOneOfTypes: Array<typeof XInputWallPaper | typeof XInputWallPaperSlug> = [XInputWallPaper, XInputWallPaperSlug];
      export class TInputWallPaper extends OneOf<typeof XInputWallPaper | typeof XInputWallPaperSlug, XInputWallPaper | XInputWallPaperSlug> {
        getTypes() {
          return TInputWallPaperOneOfTypes;
        }
      }

      const XAccountXWallPapersOneOfTypes: Array<typeof XAccountTWallPapersNotModified | typeof XAccountTWallPapers> = [XAccountTWallPapersNotModified, XAccountTWallPapers];
      export class XAccountXWallPapers extends OneOf<typeof XAccountTWallPapersNotModified | typeof XAccountTWallPapers, XAccountTWallPapersNotModified | XAccountTWallPapers> {
        getTypes() {
          return XAccountXWallPapersOneOfTypes;
        }
      }
export class TCodeSettings extends XCodeSettings {
      }
export class TWallPaperSettings extends XWallPaperSettings {
      }
export class TAutoDownloadSettings extends XAutoDownloadSettings {
      }
export class XAccountXAutoDownloadSettings extends XAccountTAutoDownloadSettings {
      }

      const TEmojiKeywordOneOfTypes: Array<typeof XEmojiKeyword | typeof XEmojiKeywordDeleted> = [XEmojiKeyword, XEmojiKeywordDeleted];
      export class TEmojiKeyword extends OneOf<typeof XEmojiKeyword | typeof XEmojiKeywordDeleted, XEmojiKeyword | XEmojiKeywordDeleted> {
        getTypes() {
          return TEmojiKeywordOneOfTypes;
        }
      }
export class TEmojiKeywordsDifference extends XEmojiKeywordsDifference {
      }
export class TEmojiUrl extends XEmojiUrl {
      }
export class TEmojiLanguage extends XEmojiLanguage {
      }
export class TFileLocation extends XFileLocationToBeDeprecated {
      }
export class TFolder extends XFolder {
      }
export class TInputFolderPeer extends XInputFolderPeer {
      }
export class TFolderPeer extends XFolderPeer {
      }
export class XMessagesXSearchCounter extends XMessagesTSearchCounter {
      }

      const TUrlAuthResultOneOfTypes: Array<typeof XUrlAuthResultRequest | typeof XUrlAuthResultAccepted | typeof XUrlAuthResultDefault> = [XUrlAuthResultRequest, XUrlAuthResultAccepted, XUrlAuthResultDefault];
      export class TUrlAuthResult extends OneOf<typeof XUrlAuthResultRequest | typeof XUrlAuthResultAccepted | typeof XUrlAuthResultDefault, XUrlAuthResultRequest | XUrlAuthResultAccepted | XUrlAuthResultDefault> {
        getTypes() {
          return TUrlAuthResultOneOfTypes;
        }
      }

      const TChannelLocationOneOfTypes: Array<typeof XChannelLocationEmpty | typeof XChannelLocation> = [XChannelLocationEmpty, XChannelLocation];
      export class TChannelLocation extends OneOf<typeof XChannelLocationEmpty | typeof XChannelLocation, XChannelLocationEmpty | XChannelLocation> {
        getTypes() {
          return TChannelLocationOneOfTypes;
        }
      }
export class TPeerLocated extends XPeerLocated {
      }
export class TRestrictionReason extends XRestrictionReason {
      }

      const TInputThemeOneOfTypes: Array<typeof XInputTheme | typeof XInputThemeSlug> = [XInputTheme, XInputThemeSlug];
      export class TInputTheme extends OneOf<typeof XInputTheme | typeof XInputThemeSlug, XInputTheme | XInputThemeSlug> {
        getTypes() {
          return TInputThemeOneOfTypes;
        }
      }

      const TThemeOneOfTypes: Array<typeof XThemeDocumentNotModified | typeof XTheme> = [XThemeDocumentNotModified, XTheme];
      export class TTheme extends OneOf<typeof XThemeDocumentNotModified | typeof XTheme, XThemeDocumentNotModified | XTheme> {
        getTypes() {
          return TThemeOneOfTypes;
        }
      }

      const XAccountXThemesOneOfTypes: Array<typeof XAccountTThemesNotModified | typeof XAccountTThemes> = [XAccountTThemesNotModified, XAccountTThemes];
      export class XAccountXThemes extends OneOf<typeof XAccountTThemesNotModified | typeof XAccountTThemes, XAccountTThemesNotModified | XAccountTThemes> {
        getTypes() {
          return XAccountXThemesOneOfTypes;
        }
      }
export class TResPq extends XResPq {
      }

      const TPXQTInnerTDataOneOfTypes: Array<typeof XPTQTInnerTData | typeof XPTQTInnerTDataTTemp> = [XPTQTInnerTData, XPTQTInnerTDataTTemp];
      export class TPXQTInnerTData extends OneOf<typeof XPTQTInnerTData | typeof XPTQTInnerTDataTTemp, XPTQTInnerTData | XPTQTInnerTDataTTemp> {
        getTypes() {
          return TPXQTInnerTDataOneOfTypes;
        }
      }

      const TServerXDhXParamsOneOfTypes: Array<typeof XServerXDhTParamsTFail | typeof XServerXDhTParamsTOk> = [XServerXDhTParamsTFail, XServerXDhTParamsTOk];
      export class TServerXDhXParams extends OneOf<typeof XServerXDhTParamsTFail | typeof XServerXDhTParamsTOk, XServerXDhTParamsTFail | XServerXDhTParamsTOk> {
        getTypes() {
          return TServerXDhXParamsOneOfTypes;
        }
      }
export class TServerXDhTInnerTData extends XServerXDhTInnerTData {
      }
export class TClientXDhXInnerXData extends XClientXDhTInnerTData {
      }

      const TSetTClientXDhTParamsTAnswerOneOfTypes: Array<typeof XDhTGenTOk | typeof XDhTGenTRetry | typeof XDhTGenTFail> = [XDhTGenTOk, XDhTGenTRetry, XDhTGenTFail];
      export class TSetTClientXDhTParamsTAnswer extends OneOf<typeof XDhTGenTOk | typeof XDhTGenTRetry | typeof XDhTGenTFail, XDhTGenTOk | XDhTGenTRetry | XDhTGenTFail> {
        getTypes() {
          return TSetTClientXDhTParamsTAnswerOneOfTypes;
        }
      }
export class TRpcResult extends XRpcTResult {
      }
export class TRpcError extends XRpcTError {
      }

      const TRpcDropAnswerOneOfTypes: Array<typeof XRpcTAnswerTUnknown | typeof XRpcTAnswerTDroppedTRunning | typeof XRpcTAnswerTDropped> = [XRpcTAnswerTUnknown, XRpcTAnswerTDroppedTRunning, XRpcTAnswerTDropped];
      export class TRpcDropAnswer extends OneOf<typeof XRpcTAnswerTUnknown | typeof XRpcTAnswerTDroppedTRunning | typeof XRpcTAnswerTDropped, XRpcTAnswerTUnknown | XRpcTAnswerTDroppedTRunning | XRpcTAnswerTDropped> {
        getTypes() {
          return TRpcDropAnswerOneOfTypes;
        }
      }
export class TFutureSalt extends XFutureTSalt {
      }
export class TFutureSalts extends XFutureTSalts {
      }
export class TPong extends XPong {
      }

      const TDestroySessionResOneOfTypes: Array<typeof XDestroyTSessionTOk | typeof XDestroyTSessionTNone> = [XDestroyTSessionTOk, XDestroyTSessionTNone];
      export class TDestroySessionRes extends OneOf<typeof XDestroyTSessionTOk | typeof XDestroyTSessionTNone, XDestroyTSessionTOk | XDestroyTSessionTNone> {
        getTypes() {
          return TDestroySessionResOneOfTypes;
        }
      }
export class TNewSession extends XNewTSessionTCreated {
      }
export class TMessageContainer extends XMsgTContainer {
      }
export class TMessageCopy extends XMsgTCopy {
      }
export class TObject extends XGzipTPacked {
      }
export class TMsgsAck extends XMsgsTAck {
      }

      const TBadMsgNotificationOneOfTypes: Array<typeof XBadTMsgTNotification | typeof XBadTServerTSalt> = [XBadTMsgTNotification, XBadTServerTSalt];
      export class TBadMsgNotification extends OneOf<typeof XBadTMsgTNotification | typeof XBadTServerTSalt, XBadTMsgTNotification | XBadTServerTSalt> {
        getTypes() {
          return TBadMsgNotificationOneOfTypes;
        }
      }
export class TMsgResendReq extends XMsgTResendTReq {
      }
export class TMsgsStateReq extends XMsgsTStateTReq {
      }
export class TMsgsStateInfo extends XMsgsTStateTInfo {
      }
export class TMsgsAllInfo extends XMsgsTAllTInfo {
      }

      const TMsgDetailedInfoOneOfTypes: Array<typeof XMsgTDetailedTInfo | typeof XMsgTNewTDetailedTInfo> = [XMsgTDetailedTInfo, XMsgTNewTDetailedTInfo];
      export class TMsgDetailedInfo extends OneOf<typeof XMsgTDetailedTInfo | typeof XMsgTNewTDetailedTInfo, XMsgTDetailedTInfo | XMsgTNewTDetailedTInfo> {
        getTypes() {
          return TMsgDetailedInfoOneOfTypes;
        }
      }
export class TBindAuthKeyInner extends XBindTAuthTKeyTInner {
      }